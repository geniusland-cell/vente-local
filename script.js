// ===== DONNÉES DES COFFRETS LA ROSE =====
const produits = [
  // ===== 19 COFFRETS 4 PIÈCES À 15.000 FCFA =====
  {
    id: 1,
    nom: "La Rose - Coffret 4 Pièces Élégance",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret prestige La Rose - 4 pièces : 2 draps + 2 taies d'oreiller en 100% coton supérieur de Londres.",
    images: [
      "images/produits/photo-coffret1.jpg",
      "images/produits/photo-coffret1.jpg",
      "images/produits/photo-coffret1.jpg",
      "images/produits/photo-coffret1.jpg",
      "images/produits/photo-coffret1.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Qualité Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur qualité exceptionnelle",
      "Douceur peau de pêche incomparable",
    ],
    enStock: true,
    badge: "4 Pièces",
  },
  {
    id: 2,
    nom: "La Rose - Coffret 4 Pièces Prestige",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret La Rose prestige - 4 pièces en 100% coton supérieur pour un confort optimal.",
    images: [
      "images/produits/photo-coffret2.jpg",
      "images/produits/photo-coffret2.jpg",
      "images/produits/photo-coffret2.jpg",
      "images/produits/photo-coffret2.jpg",
      "images/produits/photo-coffret2.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Origine Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur de qualité",
      "Tissu respirant et hypoallergénique",
      "Lavable en machine - couleurs résistantes",
    ],
    enStock: true,
    badge: "4 Pièces",
  },
  {
    id: 3,
    nom: "La Rose - Coffret 4 Pièces Royal",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret royal La Rose - 4 pièces en coton 100% supérieur, élégance et confort.",
    images: [
      "images/produits/photo-coffret3.jpg",
      "images/produits/photo-coffret3.jpg",
      "images/produits/photo-coffret3.jpg",
      "images/produits/photo-coffret3.jpg",
      "images/produits/photo-coffret3.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Londres authentique",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur qualité premium",
      "Douceur exceptionnelle garantie",
    ],
    enStock: true,
    badge: "4 Pièces",
  },
  {
    id: 4,
    nom: "La Rose - Coffret 4 Pièces Luxe",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret luxe La Rose - 4 pièces en 100% coton supérieur, qualité londonienne.",
    images: [
      "images/produits/photo-coffret4.jpg",
      "images/produits/photo-coffret4.jpg",
      "images/produits/photo-coffret4.jpg",
      "images/produits/photo-coffret4.jpg",
      "images/produits/photo-coffret4.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Excellence Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur de première qualité",
      "Confort optimal pour le sommeil",
      "Lavage facile - douceur préservée",
    ],
    enStock: true,
  },
  {
    id: 5,
    nom: "La Rose - Coffret 4 Pièces Classique",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret classique La Rose - 4 pièces en coton 100% supérieur, tradition et qualité.",
    images: [
      "images/produits/photo-coffret5.jpg",
      "images/produits/photo-coffret5.jpg",
      "images/produits/photo-coffret5.jpg",
      "images/produits/photo-coffret5.jpg",
      "images/produits/photo-coffret5.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Qualité Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur respirant",
      "Toucher peau de pêche incomparable",
    ],
    enStock: true,
  },
  {
    id: 6,
    nom: "La Rose - Coffret 4 Pièces Moderne",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret moderne La Rose - 4 pièces en 100% coton supérieur, design contemporain.",
    images: [
      "images/produits/photo-coffret6.jpg",
      "images/produits/photo-coffret6.jpg",
      "images/produits/photo-coffret6.jpg",
      "images/produits/photo-coffret6.jpg",
      "images/produits/photo-coffret6.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Londres moderne",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur qualité supérieure",
      "Style contemporain et élégant",
      "Origine Londres garantie",
    ],
    enStock: true,
  },
  {
    id: 7,
    nom: "La Rose - Coffret 4 Pièces Élégant",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret élégant La Rose - 4 pièces en coton 100% supérieur, raffinement absolu.",
    images: [
      "images/produits/photo-coffret7.jpg",
      "images/produits/photo-coffret7.jpg",
      "images/produits/photo-coffret7.jpg",
      "images/produits/photo-coffret7.jpg",
      "images/produits/photo-coffret7.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Raffinement Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur premium",
      "Douceur et confort exceptionnels",
    ],
    enStock: true,
  },
  {
    id: 8,
    nom: "La Rose - Coffret 4 Pièces Premium",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret premium La Rose - 4 pièces en 100% coton supérieur, qualité exceptionnelle.",
    images: [
      "images/produits/photo-coffret8.jpg",
      "images/produits/photo-coffret8.jpg",
      "images/produits/photo-coffret8.jpg",
      "images/produits/photo-coffret8.jpg",
      "images/produits/photo-coffret8.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Excellence Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur de luxe",
      "Tissu haute qualité respirant",
      "Lavage professionnel recommandé",
    ],
    enStock: true,
  },
  {
    id: 9,
    nom: "La Rose - Coffret 4 Pièces Noble",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret noble La Rose - 4 pièces en coton 100% supérieur, noblesse et confort.",
    images: [
      "images/produits/photo-coffret9.jpg",
      "images/produits/photo-coffret9.jpg",
      "images/produits/photo-coffret9.jpg",
      "images/produits/photo-coffret9.jpg",
      "images/produits/photo-coffret9.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Noblesse Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur qualité royale",
      "Confort de sommeil optimal",
    ],
    enStock: true,
  },
  {
    id: 10,
    nom: "La Rose - Coffret 4 Pièces Suprême",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret suprême La Rose - 4 pièces en 100% coton supérieur, le summum du confort.",
    images: [
      "images/produits/photo-coffret10.jpg",
      "images/produits/photo-coffret10.jpg",
      "images/produits/photo-coffret10.jpg",
      "images/produits/photo-coffret10.jpg",
      "images/produits/photo-coffret10.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Suprématie Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur exceptionnel",
      "Douceur peau de pêche garantie",
      "Qualité Londres authentique",
    ],
    enStock: true,
  },
  {
    id: 11,
    nom: "La Rose - Coffret 4 Pièces Excellence",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret excellence La Rose - 4 pièces en coton 100% supérieur, excellence garantie.",
    images: [
      "images/produits/photo-coffret11.jpg",
      "images/produits/photo-coffret11.jpg",
      "images/produits/photo-coffret11.jpg",
      "images/produits/photo-coffret11.jpg",
      "images/produits/photo-coffret11.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Excellence Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur premium",
      "Toucher luxueux incomparable",
    ],
    enStock: true,
  },
  {
    id: 12,
    nom: "La Rose - Coffret 4 Pièces Prestige Royal",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret prestige royal La Rose - 4 pièces en 100% coton supérieur de Londres.",
    images: [
      "images/produits/photo-coffret12.jpg",
      "images/produits/photo-coffret12.jpg",
      "images/produits/photo-coffret12.jpg",
      "images/produits/photo-coffret12.jpg",
      "images/produits/photo-coffret12.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Prestige Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur qualité royale",
      "Élégance et raffinement suprêmes",
      "Origine Londres exclusive",
    ],
    enStock: true,
  },
  {
    id: 13,
    nom: "La Rose - Coffret 4 Pièces Élégance Pure",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret élégance pure La Rose - 4 pièces en coton 100% supérieur, pureté et confort.",
    images: [
      "images/produits/photo-coffret13.jpg",
      "images/produits/photo-coffret13.jpg",
      "images/produits/photo-coffret13.jpg",
      "images/produits/photo-coffret13.jpg",
      "images/produits/photo-coffret13.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Pureté Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur naturel",
      "Confort respirant optimal",
    ],
    enStock: true,
  },
  {
    id: 14,
    nom: "La Rose - Coffret 4 Pièces Luxe Absolu",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret luxe absolu La Rose - 4 pièces en 100% coton supérieur, luxe authentique.",
    images: [
      "images/produits/photo-coffret14.jpg",
      "images/produits/photo-coffret14.jpg",
      "images/produits/photo-coffret14.jpg",
      "images/produits/photo-coffret14.jpg",
      "images/produits/photo-coffret14.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Luxe Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur de luxe",
      "Qualité exceptionnelle garantie",
      "Douceur incomparable au toucher",
    ],
    enStock: true,
  },
  {
    id: 15,
    nom: "La Rose - Coffret 4 Pièces Royal Prestige",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret royal prestige La Rose - 4 pièces en coton 100% supérieur, prestige royal.",
    images: [
      "images/produits/photo-coffret15.jpg",
      "images/produits/photo-coffret15.jpg",
      "images/produits/photo-coffret15.jpg",
      "images/produits/photo-coffret15.jpg",
      "images/produits/photo-coffret15.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Royal Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur prestige",
      "Élégance et confort suprêmes",
    ],
    enStock: true,
  },
  {
    id: 16,
    nom: "La Rose - Coffret 4 Pièces Noble Élégance",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret noble élégance La Rose - 4 pièces en 100% coton supérieur, noblesse pure.",
    images: [
      "images/produits/photo-coffret16.jpg",
      "images/produits/photo-coffret16.jpg",
      "images/produits/photo-coffret16.jpg",
      "images/produits/photo-coffret16.jpg",
      "images/produits/photo-coffret16.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Noblesse Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur noble",
      "Qualité authentique Londres",
      "Confort de sommeil royal",
    ],
    enStock: true,
  },
  {
    id: 17,
    nom: "La Rose - Coffret 4 Pièces Prestige Or",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret prestige or La Rose - 4 pièces en coton 100% supérieur, prestige doré.",
    images: [
      "images/produits/photo-coffret17.jpg",
      "images/produits/photo-coffret17.jpg",
      "images/produits/photo-coffret17.jpg",
      "images/produits/photo-coffret17.jpg",
      "images/produits/photo-coffret17.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Prestige Or Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur doré",
      "Luxe et élégance combinés",
    ],
    enStock: true,
  },
  {
    id: 18,
    nom: "La Rose - Coffret 4 Pièces Excellence Pure",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret excellence pure La Rose - 4 pièces en 100% coton supérieur, pure excellence.",
    images: [
      "images/produits/photo-coffret18.jpg",
      "images/produits/photo-coffret18.jpg",
      "images/produits/photo-coffret18.jpg",
      "images/produits/photo-coffret18.jpg",
      "images/produits/photo-coffret18.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Excellence Pure Londres",
      "Coffret 4 pièces : 2 draps + 2 taies",
      "100% Coton Supérieur pur",
      "Qualité Londres incontestable",
      "Douceur exceptionnelle garantie",
    ],
    enStock: true,
  },
  {
    id: 19,
    nom: "La Rose - Coffret 4 Pièces Suprême Luxe",
    categorie: "4pieces",
    prix: 15000,
    description:
      "Coffret suprême luxe La Rose - 4 pièces en coton 100% supérieur, luxe suprême.",
    images: [
      "images/produits/photo-coffret19.jpg",
      "images/produits/photo-coffret19.jpg",
      "images/produits/photo-coffret19.jpg",
      "images/produits/photo-coffret19.jpg",
      "images/produits/photo-coffret19.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Suprême Luxe Londres",
      "Coffret 4 pièces complet",
      "2 draps + 2 taies d'oreiller",
      "100% Coton Supérieur suprême",
      "Le summum du confort londonien",
    ],
    enStock: true,
  },

  // ===== 3 COFFRETS 6 PIÈCES À 20.000 FCFA =====
  {
    id: 20,
    nom: "La Rose - Coffret 6 Pièces Prestige",
    categorie: "6pieces",
    prix: 20000,
    description:
      "Coffret prestige La Rose - 6 pièces complet : 2 draps + 2 taies + 2 rideaux en 100% coton supérieur.",
    images: [
      "images/produits/photo-bigCoffret1.jpg",
      "images/produits/photo-bigCoffret1.jpg",
      "images/produits/photo-bigCoffret1.jpg",
      "images/produits/photo-bigCoffret1.jpg",
      "images/produits/photo-bigCoffret1.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Prestige Londres",
      "Coffret 6 pièces complet",
      "2 draps + 2 taies + 2 rideaux",
      "100% Coton Supérieur qualité exceptionnelle",
      "Ensemble complet pour chambre",
    ],
    enStock: true,
    badge: "6 Pièces",
  },
  {
    id: 21,
    nom: "La Rose - Coffret 6 Pièces Royal",
    categorie: "6pieces",
    prix: 20000,
    description:
      "Coffret royal La Rose - 6 pièces luxe : 2 draps + 2 taies + 2 rideaux en coton 100% supérieur.",
    images: [
      "images/produits/photo-bigCoffret2.jpg",
      "images/produits/photo-bigCoffret2.jpg",
      "images/produits/photo-bigCoffret2.jpg",
      "images/produits/photo-bigCoffret2.jpg",
      "images/produits/photo-bigCoffret2.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Royal Londres",
      "Coffret 6 pièces : ensemble complet",
      "2 draps + 2 taies + 2 rideaux",
      "100% Coton Supérieur de qualité royale",
      "Harmonie parfaite pour votre chambre",
    ],
    enStock: true,
    badge: "6 Pièces",
  },
  {
    id: 22,
    nom: "La Rose - Coffret 6 Pièces Excellence",
    categorie: "6pieces",
    prix: 20000,
    description:
      "Coffret excellence La Rose - 6 pièces premium : 2 draps + 2 taies + 2 rideaux en 100% coton supérieur.",
    images: [
      "images/produits/photo-bigCoffret3.jpg",
      "images/produits/photo-bigCoffret3.jpg",
      "images/produits/photo-bigCoffret3.jpg",
      "images/produits/photo-bigCoffret3.jpg",
      "images/produits/photo-bigCoffret3.jpg",
    ],
    caracteristiques: [
      "Marque : La Rose - Excellence Londres",
      "Coffret 6 pièces complet prestige",
      "2 draps + 2 taies + 2 rideaux",
      "100% Coton Supérieur qualité premium",
      "Collection complète d'exception",
    ],
    enStock: true,
    badge: "6 Pièces",
  },
];

// ===== VARIABLES GLOBALES =====
let produitsFiltres = [...produits];
let indexImageActuelle = 0;
let produitActuel = null;
const numeroWhatsApp = "242067678128";

// ===== FONCTIONS PRINCIPALES =====

// Formater le prix en FCFA
function formaterPrix(prix) {
  return new Intl.NumberFormat("fr-FR").format(prix) + " FCFA";
}

// Créer une carte produit
function creerCarteProduit(produit) {
  return `
        <div class="product-card" data-category="${
          produit.categorie
        }" data-prix="${produit.prix}">
            ${
              produit.badge
                ? `<div class="product-badge">${produit.badge}</div>`
                : ""
            }
            <div class="product-image">
                <img src="${produit.images[0]}" alt="${
    produit.nom
  }" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${produit.nom}</h3>
                <p class="product-description">${produit.description}</p>
                <div class="product-price">${formaterPrix(produit.prix)}</div>
                <div class="product-actions">
                    <button class="btn-whatsapp" onclick="commanderWhatsApp(${
                      produit.id
                    })">
                        <i class="fab fa-whatsapp"></i> Commander
                    </button>
                    <button class="btn-details" onclick="voirDetails(${
                      produit.id
                    })">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Afficher tous les produits
function afficherProduits(produitsAAfficher) {
  const grid = document.getElementById("products-grid");

  if (produitsAAfficher.length === 0) {
    grid.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666;">Aucun coffret trouvé</h3>
                <p style="color: #999;">Essayez de modifier vos filtres de recherche</p>
            </div>
        `;
    return;
  }

  grid.innerHTML = produitsAAfficher
    .map((produit) => creerCarteProduit(produit))
    .join("");
}

// Filtrer les produits
function filtrerProduits() {
  const categorie = document.getElementById("category-filter").value;
  const prix = document.getElementById("price-filter").value;
  const recherche = document.getElementById("search-input").value.toLowerCase();

  produitsFiltres = produits.filter((produit) => {
    // Filtre par catégorie
    if (categorie !== "all" && produit.categorie !== categorie) {
      return false;
    }

    // Filtre par prix
    if (prix !== "all" && produit.prix !== parseInt(prix)) {
      return false;
    }

    // Filtre par recherche
    if (recherche && !produit.nom.toLowerCase().includes(recherche)) {
      return false;
    }

    return true;
  });

  afficherProduits(produitsFiltres);
}

// Commander via WhatsApp
function commanderWhatsApp(produitId) {
  const produit = produits.find((p) => p.id === produitId);
  if (!produit) return;

  const typeCoffret =
    produit.categorie === "4pieces"
      ? "4 pièces (2 draps + 2 taies)"
      : "6 pièces (2 draps + 2 taies + 2 rideaux)";

  const message = `Bonjour! Je souhaite commander le coffret suivant :%0A%0A*${
    produit.nom
  }*%0A${formaterPrix(
    produit.prix
  )}%0ACoffret ${typeCoffret}%0AMarque La Rose - 100% Coton Supérieur%0A%0APouvez-vous me donner plus d'informations ?`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;
  window.open(urlWhatsApp, "_blank");
}

// Voir les détails avec galerie
function voirDetails(produitId) {
  produitActuel = produits.find((p) => p.id === produitId);
  if (!produitActuel) return;

  indexImageActuelle = 0;

  const typeCoffret =
    produitActuel.categorie === "4pieces"
      ? "4 pièces : 2 draps + 2 taies d'oreiller"
      : "6 pièces : 2 draps + 2 taies + 2 rideaux";

  const modalHTML = `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" onclick="fermerModal()">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="modal-body">
                    <div class="modal-gallery">
                        <div class="gallery-main">
                            <img id="main-image" src="${
                              produitActuel.images[0]
                            }" alt="${produitActuel.nom}">
                            <button class="gallery-prev" onclick="changerImage(-1)">‹</button>
                            <button class="gallery-next" onclick="changerImage(1)">›</button>
                        </div>
                        
                        <div class="gallery-thumbnails" id="thumbnails">
                            ${produitActuel.images
                              .map(
                                (image, index) => `
                                <div class="thumbnail ${
                                  index === 0 ? "active" : ""
                                }" onclick="selectionnerImage(${index})">
                                    <img src="${image}" alt="Vue ${index + 1}">
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    <div class="modal-info">
                        <h2 id="modal-titre">${produitActuel.nom}</h2>
                        <div class="modal-price">${formaterPrix(
                          produitActuel.prix
                        )}</div>
                        <p class="modal-description">${
                          produitActuel.description
                        }</p>
                        
                        <div class="modal-features">
                            <h3>Caractéristiques :</h3>
                            <ul>
                                ${produitActuel.caracteristiques
                                  .map((carac) => `<li>${carac}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                        
                        <div class="proof-indicators">
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Marque La Rose - Qualité Londres Authentique</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Coffret ${typeCoffret}</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>100% Coton Supérieur - Douceur Exceptionnelle</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Origine Londres - Qualité Garantie</span>
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="btn-whatsapp large" onclick="commanderWhatsApp(${
                              produitActuel.id
                            })">
                                <i class="fab fa-whatsapp"></i> Commander via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  document.body.style.overflow = "hidden";
}

// Changer d'image dans la galerie
function changerImage(direction) {
  if (!produitActuel) return;

  indexImageActuelle += direction;

  if (indexImageActuelle < 0) {
    indexImageActuelle = produitActuel.images.length - 1;
  } else if (indexImageActuelle >= produitActuel.images.length) {
    indexImageActuelle = 0;
  }

  mettreAJourGalerie();
}

// Sélectionner une image spécifique
function selectionnerImage(index) {
  indexImageActuelle = index;
  mettreAJourGalerie();
}

// Mettre à jour l'affichage de la galerie
function mettreAJourGalerie() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (mainImage && produitActuel) {
    mainImage.src = produitActuel.images[indexImageActuelle];
  }

  thumbnails.forEach((thumb, index) => {
    if (index === indexImageActuelle) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

// Fermer la modale
function fermerModal() {
  const modal = document.getElementById("modal-overlay");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "auto";
  }
  produitActuel = null;
}

// Initialiser les événements
function initialiserEvenements() {
  // Filtres
  document
    .getElementById("category-filter")
    .addEventListener("change", filtrerProduits);
  document
    .getElementById("price-filter")
    .addEventListener("change", filtrerProduits);
  document
    .getElementById("search-input")
    .addEventListener("input", filtrerProduits);

  // Catégories
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const categorie = this.dataset.category;
      document.getElementById("category-filter").value = categorie;
      filtrerProduits();
      document
        .getElementById("produits")
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Navigation mobile
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    const nav = document.querySelector(".nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // Fermer modale en cliquant à l'extérieur
  document.addEventListener("click", function (event) {
    if (event.target.id === "modal-overlay") {
      fermerModal();
    }
  });

  // Navigation clavier dans la galerie
  document.addEventListener("keydown", function (event) {
    if (produitActuel) {
      if (event.key === "ArrowLeft") {
        changerImage(-1);
      } else if (event.key === "ArrowRight") {
        changerImage(1);
      } else if (event.key === "Escape") {
        fermerModal();
      }
    }
  });
}

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", function () {
  // Afficher tous les produits
  afficherProduits(produits);

  // Initialiser les événements
  initialiserEvenements();

  console.log("🌹 Site La Rose initialisé avec succès!");
  console.log(
    `📦 ${produits.length} coffrets chargés (19×4pièces + 3×6pièces)`
  );
  console.log(`💰 Prix : 15.000 FCFA (4pièces) | 20.000 FCFA (6pièces)`);
  console.log(`💬 WhatsApp: +${numeroWhatsApp}`);
});

// ===== FONCTIONNALITÉS AVANCÉES =====

// Ajouter un nouveau produit
function ajouterProduit(nouveauProduit) {
  const nouvelId = Math.max(...produits.map((p) => p.id)) + 1;
  produits.push({
    id: nouvelId,
    ...nouveauProduit,
  });
  filtrerProduits();
}

// Exporter les données produits
function exporterProduits() {
  return JSON.stringify(produits, null, 2);
}
