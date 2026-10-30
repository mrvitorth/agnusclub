import React, { useState } from 'react';
import { X, Plus, Eye, ShoppingBag, Flame, Tag, Trash2, Lock, KeyRound } from 'lucide-react';

export function AdminModal({ isOpen, onClose, storeData, onSaveData }) {
  if (!isOpen) return null;

  // ESTADO DE AUTENTICAÇÃO (SENHA)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const ADMIN_PASSWORD = "Agnus@2026#Admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    setLoginError(false);
    onClose();
  };

  // ESTADOS DO PAINEL DE PRODUTOS E MÉTRICAS
  const [activeTab, setActiveTab] = useState('products');
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    color: 'Off-White',
    originalPrice: '89,99',
    price: '79,99',
    frontImage: '/offwhite-frente.jpeg',
    backImage: '/offwhite-verso.jpeg',
    isLaunch: true,
    isFlashSale: false,
  });

  const products = storeData?.products || [];

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.title) return;

    const itemToAdd = {
      ...newProduct,
      id: Date.now(),
      tag: newProduct.isLaunch ? "1º DROP - DISPONÍVEL" : "DISPONÍVEL",
      buyLink: `https://wa.me/+5511988431330?text=${encodeURIComponent(`Olá! Quero garantir a peça: ${newProduct.title}`)}`
    };

    const updatedProducts = [...products, itemToAdd];
    onSaveData({
      ...storeData,
      products: updatedProducts
    });

    setNewProduct({
      title: '',
      description: '',
      color: 'Off-White',
      originalPrice: '89,99',
      price: '79,99',
      frontImage: '/offwhite-frente.jpeg',
      backImage: '/offwhite-verso.jpeg',
      isLaunch: true,
      isFlashSale: false,
    });
    alert('Produto adicionado com sucesso!');
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Deseja realmente remover este produto da landing page?')) {
      const updatedProducts = products.filter(p => p.id !== id);
      onSaveData({
        ...storeData,
        products: updatedProducts
      });
    }
  };

  const toggleStatus = (id, field) => {
    const updatedProducts = products.map(p => {
      if (p.id === id) {
        return { ...p, [field]: !p[field] };
      }
      return p;
    });
    onSaveData({
      ...storeData,
      products: updatedProducts
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      
      {/* TELA 1: LOGIN POR SENHA */}
      {!isAuthenticated ? (
        <div className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-8 relative">
          <button onClick={handleClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition text-neutral-400 hover:text-white">
            <X size={20} />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wider">Acesso Restrito</h3>
            <p className="text-xs text-neutral-400 mt-1">Insira a senha do painel da Agnus Club</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="relative">
                <KeyRound size={16} className="absolute left-3.5 top-3.5 text-neutral-500" />
                <input 
                  type="password"
                  placeholder="Senha de acesso"
                  value={passwordInput}
                  onChange={(e) => { setPasswordInput(e.target.value); setLoginError(false); }}
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-white transition"
                  autoFocus
                  required
                />
              </div>
              {loginError && (
                <p className="text-[11px] text-red-400 mt-2 font-semibold">Senha incorreta. Tente novamente.</p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-neutral-200 transition shadow-lg"
            >
              Entrar no Painel
            </button>
          </form>
        </div>
      ) : (
        /* TELA 2: PAINEL ADMINISTRATIVO REAL */
        <div className="bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
          
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-950">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Painel Administrativo - Agnus Club</h2>
              <p className="text-xs text-neutral-400">Gerencie métricas, preços e catálogo de lançamentos</p>
            </div>
            <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-full transition text-neutral-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex border-b border-white/10 bg-neutral-900/50 px-6">
            <button 
              onClick={() => setActiveTab('products')} 
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition ${activeTab === 'products' ? 'border-white text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
            >
              Gerenciar Produtos
            </button>
            <button 
              onClick={() => setActiveTab('metrics')} 
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition ${activeTab === 'metrics' ? 'border-white text-white' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
            >
              Métricas & Visitas
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            {activeTab === 'metrics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="p-4 bg-blue-500/20 text-blue-400 rounded-xl">
                    <Eye size={32} />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block font-bold">Total de Visualizações</span>
                    <span className="text-3xl font-black text-white">1</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Acessos registrados no navegador</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="p-4 bg-emerald-500/20 text-emerald-400 rounded-xl">
                    <ShoppingBag size={32} />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase tracking-wider block font-bold">Cliques para Comprar</span>
                    <span className="text-3xl font-black text-white">0</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Intenções de compra enviadas ao WhatsApp</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <>
                <form onSubmit={handleAddProduct} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Plus size={16} className="text-emerald-400" /> Cadastrar Novo Produto
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Título do Produto</label>
                      <input 
                        type="text" 
                        placeholder="Ex: Oversized Salmos 27:14"
                        value={newProduct.title}
                        onChange={e => setNewProduct({...newProduct, title: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Cor / Variação</label>
                      <input 
                        type="text" 
                        placeholder="Ex: Off-White / Creme"
                        value={newProduct.color}
                        onChange={e => setNewProduct({...newProduct, color: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Preço Original (Riscado)</label>
                      <input 
                        type="text" 
                        placeholder="89,99"
                        value={newProduct.originalPrice}
                        onChange={e => setNewProduct({...newProduct, originalPrice: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Preço de Lançamento / Venda</label>
                      <input 
                        type="text" 
                        placeholder="79,99"
                        value={newProduct.price}
                        onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Caminho da Foto Frente</label>
                      <input 
                        type="text" 
                        placeholder="/offwhite-frente.jpeg"
                        value={newProduct.frontImage}
                        onChange={e => setNewProduct({...newProduct, frontImage: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Caminho da Foto Verso</label>
                      <input 
                        type="text" 
                        placeholder="/offwhite-verso.jpeg"
                        value={newProduct.backImage}
                        onChange={e => setNewProduct({...newProduct, backImage: e.target.value})}
                        className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Descrição / Versículo</label>
                    <textarea 
                      rows="2"
                      placeholder="Descrição da modelagem ou mensagem bíblica..."
                      value={newProduct.description}
                      onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                      className="w-full bg-neutral-950 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white"
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300 font-semibold">
                      <input 
                        type="checkbox" 
                        checked={newProduct.isLaunch}
                        onChange={e => setNewProduct({...newProduct, isLaunch: e.target.checked})}
                        className="accent-white w-4 h-4 rounded"
                      />
                      Destaque Lançamento (Drop 1)
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300 font-semibold">
                      <input 
                        type="checkbox" 
                        checked={newProduct.isFlashSale}
                        onChange={e => setNewProduct({...newProduct, isFlashSale: e.target.checked})}
                        className="accent-orange-500 w-4 h-4 rounded"
                      />
                      Selo Promoção Relâmpago
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-white text-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
                  >
                    Salvar e Publicar Produto
                  </button>
                </form>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Produtos Ativos no Site ({products.length})</h3>
                  
                  <div className="space-y-3">
                    {products.map((p) => (
                      <div key={p.id} className="p-4 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img src={p.frontImage || p.imageUrl} alt={p.title || p.name} className="w-12 h-12 object-cover rounded-lg bg-neutral-800" />
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase">{p.title || p.name}</h4>
                            <p className="text-xs text-neutral-400">
                              R$ {p.price} {p.originalPrice && <span className="line-through text-neutral-600">R$ {p.originalPrice}</span>}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => toggleStatus(p.id, 'isLaunch')}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border ${p.isLaunch ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-500 border-neutral-800'}`}
                          >
                            <Tag size={12} /> {p.isLaunch ? 'Lançamento' : 'Comum'}
                          </button>

                          <button 
                            onClick={() => toggleStatus(p.id, 'isFlashSale')}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border ${p.isFlashSale ? 'bg-orange-500 text-white border-orange-500' : 'bg-transparent text-neutral-500 border-neutral-800'}`}
                          >
                            <Flame size={12} /> {p.isFlashSale ? 'Promoção' : 'Normal'}
                          </button>

                          <button 
                            onClick={() => handleDeleteProduct(p.id)}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                            title="Excluir Produto"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}