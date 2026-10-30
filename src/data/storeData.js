export const initialStoreData = {
  contact: {
    whatsapp: "5511988431330", 
    instagramUrl: "https://www.instagram.com/agnus.club",
    instagramHandle: "@agnus.club"
  },
  products: [
    {
      id: 1,
      title: "Oversized Salmos 27:14",
      color: "Off-White / Creme",
      description: '"Espera no Senhor, sê corajoso, e ele fortalecerá o teu coração; espera, pois, no Senhor."',
      tag: "1º DROP - DISPONÍVEL",
      price: "79,99", // <-- Preço
      frontImage: "/camisa-salmos-offwhite-frente.jpeg", // Foto da frente (com o cordeiro pequeno)
      backImage: "/camisa-salmos-offwhite-verso.jpeg",   // Foto do verso (com o Salmos grande)
      imageUrl: "/camisa-salmos-offwhite-frente.jpeg",   // Mantido por compatibilidade
      buyLink: "https://wa.me/+5511988431330?text=Olá,%20tenho%20interesse%20na%20Camiseta%20Salmos%2027:14!"
    },
    {
      id: 2,
      title: "Oversized Jesus Is King",
      color: "Black Washed / Preto",
      description: "Modelagem streetwear premium com estampa marcante e detalhes em azul royal.",
      tag: "1º DROP - DISPONÍVEL",
      price: "79,99", // <-- Preço
      frontImage: "/camisa-jesus-offwhite-frente.jpg", // Foto da frente (ou a que você definiu para a preta)
      backImage: "/camisa-jesus-offwhite-verso.jpeg", // Foto do verso (com o Jesus Is King)
      imageUrl: "/camisa-jesus-offwhite-frente.jpg",   // Mantido por compatibilidade
      buyLink: "https://wa.me/+5511988431330?text=Olá,%20tenho%20interesse%20na%20Camiseta%20Jesus%20is%20King!"
    }
  ]
};