import React, { useState, useEffect } from 'react';
import { Lock, LogOut, Plus, Trash2, Tag, Flame, Upload, ArrowLeft, Edit3, Check, X } from 'lucide-react';

export function AdminPage() {
  const [password, setPassword] = useState(() => sessionStorage.getItem('agnus_admin_token') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('agnus_admin_token'));
  const [loginInput, setLoginInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [products, setProducts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Estados de Configurações Gerais da Loja
  const [settings, setSettings] = useState({
    launch_date: '01/11',
    launch_banner: '1º DROP DISPONÍVEL',
    whatsapp: '5511988431330',
    instagram: '@agnusclub'
  });
  const [savingSettings, setSavingSettings] = useState(false);

  // Formulário
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState('89,99');
  const [price, setPrice] = useState('79,99');
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [isLaunch, setIsLaunch] = useState(true);
  const [isFlashSale, setIsFlashSale] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      setProducts(data);
    }
  };

  const fetchSettings = async () => {
    const res = await fetch('/api/settings');
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) {
        setSettings(data);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
      fetchSettings();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    // Testa a senha fazendo uma requisição de validação rápida
    const res = await fetch('/api/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginInput}`
      },
      body: JSON.stringify({ id: -1 }) // ID inexistente apenas para validar token
    });

    if (res.status !== 401) {
      sessionStorage.setItem('agnus_admin_token', loginInput);
      setPassword(loginInput);
      setIsAuthenticated(true);
    } else {
      setLoginError('Senha incorreta.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('agnus_admin_token');
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify(settings)
      });
      if (!res.ok) throw new Error('Erro ao salvar configurações');
      alert('Configurações da loja atualizadas com sucesso!');
    } catch (err) {
      alert(err.message);
    } finally {
      setSavingSettings(false);
    }
  };

  const uploadToVercelBlob = async (file) => {
    if (!file) return '';
    const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${password}`
      },
      body: file
    });
    if (!res.ok) throw new Error('Falha no upload da imagem');
    const blob = await res.json();
    return blob.url;
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    if (!title || !frontFile) return;

    setIsSaving(true);
    try {
      const frontImageUrl = await uploadToVercelBlob(frontFile);
      const backImageUrl = backFile ? await uploadToVercelBlob(backFile) : frontImageUrl;

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({
          title,
          color,
          description,
          originalPrice,
          price,
          frontImage: frontImageUrl,
          backImage: backImageUrl,
          isLaunch,
          isFlashSale
        })
      });

      if (!res.ok) throw new Error('Erro ao salvar produto');

      setTitle('');
      setColor('');
      setDescription('');
      setOriginalPrice('89,99');
      setPrice('79,99');
      setFrontFile(null);
      setBackFile(null);
      e.target.reset();
      await fetchProducts();
      alert('Produto publicado com sucesso!');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja realmente excluir este produto?')) return;
    await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${password}` }
    });
    fetchProducts();
  };

  const handleToggleFlag = async (item, field) => {
    await fetch('/api/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${password}`
      },
      body: JSON.stringify({
        id: item.id,
        [field]: !item[field]
      })
    });
    fetchProducts();
  };

  const saveEdit = async (id) => {
    await fetch('/api/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${password}`
      },
      body: JSON.stringify({ id, ...editForm })
    });
    setEditingId(null);
    fetchProducts();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center p-4">
        <div className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-md p-8 shadow-2xl">
          <a href="/" className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white mb-6 transition">
            <ArrowLeft size={14} /> Voltar para a Loja
          </a>

          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={22} />
            </div>
            <h1 className="text-xl font-black uppercase tracking-wider">Agnus Club CMS</h1>
            <p className="text-xs text-neutral-400 mt-1">Acesso exclusivo para gestão do catálogo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
              placeholder="Digite a senha de acesso"
              className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-white"
              required
            />
            {loginError && <p className="text-xs text-red-400 font-semibold">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-white text-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
            >
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900/80 border border-white/10 p-6 rounded-3xl">
          <div>
            <h1 className="text-xl font-black uppercase tracking-wider">Gerenciador — Agnus Club</h1>
            <p className="text-xs text-neutral-400">Banco de dados conectado na Vercel</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition">
              Ver Site
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition"
            >
              <LogOut size={14} /> Sair
            </button>
          </div>
        </div>

        {/* Configurações Gerais da Loja (WhatsApp, Data de Lançamento, Avisos) */}
        <form onSubmit={handleSaveSettings} className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-3xl space-y-5">
          <h2 className="text-sm font-black uppercase tracking-wider text-blue-400">
            Configurações Gerais & Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                Data do Lançamento / Próximo Drop
              </label>
              <input
                type="text"
                placeholder="Ex: 15/12 às 20h"
                value={settings.launch_date}
                onChange={(e) => setSettings({ ...settings, launch_date: e.target.value })}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                Texto de Destaque / Banner
              </label>
              <input
                type="text"
                placeholder="Ex: 2º DROP - PRÉ-VENDA LIBERADA"
                value={settings.launch_banner}
                onChange={(e) => setSettings({ ...settings, launch_banner: e.target.value })}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                WhatsApp de Atendimento (com DDI 55 + DDD)
              </label>
              <input
                type="text"
                placeholder="Ex: 5511988431330"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                Instagram da Marca
              </label>
              <input
                type="text"
                placeholder="Ex: @agnusclub"
                value={settings.instagram}
                onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={savingSettings}
            className="bg-blue-500 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-blue-600 transition disabled:opacity-50"
          >
            {savingSettings ? 'Salvando...' : 'Atualizar Informações da Loja'}
          </button>
        </form>

        <form onSubmit={handleCreateProduct} className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-3xl space-y-5">
          <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2 text-emerald-400">
            <Plus size={18} /> Publicar Nova Peça
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Nome da Camiseta *</label>
              <input
                type="text"
                placeholder="Ex: Oversized Salmos 27:14"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
                required
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Cor / Tecido</label>
              <input
                type="text"
                placeholder="Ex: Off-White / Creme"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Preço Original (Riscado)</label>
              <input
                type="text"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Preço Final (Venda) *</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
                required
              />
            </div>

            <div className="bg-neutral-950 border border-dashed border-white/20 rounded-xl p-4">
              <label className="text-[11px] text-white font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                <Upload size={14} /> Foto Frente *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFrontFile(e.target.files[0])}
                className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-white file:text-black cursor-pointer"
                required
              />
            </div>

            <div className="bg-neutral-950 border border-dashed border-white/20 rounded-xl p-4">
              <label className="text-[11px] text-white font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                <Upload size={14} /> Foto Verso (Flip)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setBackFile(e.target.files[0])}
                className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-white file:text-black cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Descrição / Versículo</label>
            <textarea
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white"
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-neutral-300">
              <input type="checkbox" checked={isLaunch} onChange={(e) => setIsLaunch(e.target.checked)} className="accent-white w-4 h-4" />
              Marcar como Lançamento
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-neutral-300">
              <input type="checkbox" checked={isFlashSale} onChange={(e) => setIsFlashSale(e.target.checked)} className="accent-orange-500 w-4 h-4" />
              Marcar como Promoção Relâmpago
            </label>
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="w-full bg-white text-black font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider hover:bg-neutral-200 transition disabled:opacity-50"
          >
            {isSaving ? 'Enviando fotos e salvando...' : 'Publicar Produto Agora'}
          </button>
        </form>

        <div className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-3xl space-y-4">
          <h2 className="text-sm font-black uppercase tracking-wider">Catálogo Publicado ({products.length})</h2>
          <div className="space-y-3">
            {products.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                {editingId === item.id ? (
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                    <input type="text" value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} className="bg-neutral-900 border border-white/20 rounded-lg px-3 py-2 text-xs text-white" />
                    <input type="text" value={editForm.originalPrice} onChange={(e) => setEditForm({ ...editForm, originalPrice: e.target.value })} className="bg-neutral-900 border border-white/20 rounded-lg px-3 py-2 text-xs text-white" />
                    <input type="text" value={editForm.price} onChange={(e) => setEditForm({ ...editForm, price: e.target.value })} className="bg-neutral-900 border border-white/20 rounded-lg px-3 py-2 text-xs text-white" />
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <img src={item.frontImage} alt={item.title} className="w-14 h-14 object-cover rounded-xl bg-neutral-800" />
                    <div>
                      <h3 className="text-sm font-bold uppercase">{item.title}</h3>
                      <p className="text-xs text-neutral-400">
                        R$ {item.price} {item.originalPrice && <span className="line-through text-neutral-600">R$ {item.originalPrice}</span>}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 flex-wrap">
                  {editingId === item.id ? (
                    <>
                      <button onClick={() => saveEdit(item.id)} className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Check size={16} /></button>
                      <button onClick={() => setEditingId(null)} className="p-2 bg-white/10 text-neutral-400 rounded-lg"><X size={16} /></button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleToggleFlag(item, 'isLaunch')} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border flex items-center gap-1 ${item.isLaunch ? 'bg-white text-black border-white' : 'text-neutral-500 border-neutral-800'}`}>
                        <Tag size={12} /> Lançamento
                      </button>
                      <button onClick={() => handleToggleFlag(item, 'isFlashSale')} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border flex items-center gap-1 ${item.isFlashSale ? 'bg-orange-500 text-white border-orange-500' : 'text-neutral-500 border-neutral-800'}`}>
                        <Flame size={12} /> Promoção
                      </button>
                      <button onClick={() => { setEditingId(item.id); setEditForm({ title: item.title, price: item.price, originalPrice: item.originalPrice || '' }); }} className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg">
                        <Edit3 size={16} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg">
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}