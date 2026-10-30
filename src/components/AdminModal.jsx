import React, { useState } from 'react';
import { X, Plus, Save } from 'lucide-react';

export function AdminModal({ isOpen, onClose, storeData, onSaveData }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Estados para formulário
  const [whatsapp, setWhatsapp] = useState(storeData.contact.whatsapp);
  const [instagramUrl, setInstagramUrl] = useState(storeData.contact.instagramUrl);
  
  // Novo produto
  const [newTitle, setNewTitle] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImg, setNewImg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'agnus123') { // Senha do Painel
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    const updated = {
      ...storeData,
      contact: {
        ...storeData.contact,
        whatsapp,
        instagramUrl,
      }
    };
    onSaveData(updated);
    alert('Informações de contato atualizadas!');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newTitle || !newImg) {
      alert('Preencha pelo menos o título e a URL da imagem.');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: newTitle,
      color: newColor || "Oversized",
      description: newDesc,
      tag: "NOVO DROP",
      imageUrl: newImg,
      buyLink: `https://wa.me/${+5511988431330}?text=Olá,%20tenho%20interesse%20no%20produto%20${encodeURIComponent(newTitle)}!`
    };

    const updated = {
      ...storeData,
      products: [...storeData.products, newProduct]
    };

    onSaveData(updated);
    setNewTitle('');
    setNewColor('');
    setNewDesc('');
    setNewImg('');
    alert('Novo produto adicionado com sucesso!');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-700 w-full max-w-2xl rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {!isAuthenticated ? (
          /* Form de Login */
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4">Painel Administrativo</h2>
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Digite a senha de acesso:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 p-2 rounded text-white focus:outline-none focus:border-white"
                placeholder="******"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-2 uppercase tracking-wider text-sm hover:bg-neutral-200"
            >
              Entrar
            </button>
          </form>
        ) : (
          /* Conteúdo do Admin */
          <div className="space-y-8">
            <h2 className="text-xl font-bold uppercase tracking-wider border-b border-neutral-800 pb-2">
              Gerenciar Conteúdo
            </h2>

            {/* Configurações de Contato */}
            <form onSubmit={handleSaveContact} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase text-neutral-400">Informações de Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">WhatsApp (com DDD e DDI)</label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">URL Instagram</label>
                  <input
                    type="text"
                    value={instagramUrl}
                    onChange={(e) => setInstagramUrl(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 text-xs font-bold uppercase"
              >
                <Save size={14} /> Salvar Contatos
              </button>
            </form>

            {/* Adicionar Produto */}
            <form onSubmit={handleAddProduct} className="space-y-4 border-t border-neutral-800 pt-6">
              <h3 className="text-sm font-semibold uppercase text-neutral-400">Adicionar Novo Produto</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nome do Produto (Ex: Oversized João 1:29)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white"
                />
                <input
                  type="text"
                  placeholder="Cor/Estilo (Ex: Preto Lavado)"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white"
                />
                <input
                  type="text"
                  placeholder="URL da Imagem do Produto"
                  value={newImg}
                  onChange={(e) => setNewImg(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white"
                />
                <textarea
                  placeholder="Descrição ou Versículo"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 p-2 text-sm rounded text-white h-20"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-bold uppercase hover:bg-neutral-200"
              >
                <Plus size={14} /> Adicionar Produto
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}