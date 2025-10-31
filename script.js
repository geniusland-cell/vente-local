// ===== DONNÉES DES DRAPS AVEC GALERIE D'IMAGES =====
const produits = [
  {
    id: 1,
    nom: "Collection Royale Buckingham",
    categorie: "royal",
    prix: 15000,
    description:
      "Pack 3 pièces en 100% coton supérieur. Douceur exceptionnelle pour des nuits de rêve. Origine Londres.",
    images: [
      "images/produits/royal-buckingham-1.jpg",
      "images/produits/royal-buckingham-2.jpg",
      "images/produits/royal-buckingham-3.jpg",
      "images/produits/royal-buckingham-4.jpg",
      "images/produits/royal-buckingham-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur qualité Londres",
      "Pack 3 pièces : 1 drap + 2 taies d'oreiller",
      "Douceur peau de pêche incomparable",
      "Tissu respirant et hypoallergénique",
      "Lavable en machine - couleurs résistantes",
    ],
    enStock: true,
    badge: "Royal",
  },
  {
    id: 2,
    nom: "Luxe Westminster",
    categorie: "royal",
    prix: 15000,
    description:
      "Élégance britannique alliée à une douceur suprême. Coton 100% de première qualité.",
    images: [
      "images/produits/luxe-westminster-1.jpg",
      "images/produits/luxe-westminster-2.jpg",
      "images/produits/luxe-westminster-3.jpg",
      "images/produits/luxe-westminster-4.jpg",
      "images/produits/luxe-westminster-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur exceptionnelle au toucher",
      "Origine Londres garantie",
      "Confort optimal pour le sommeil",
    ],
    enStock: true,
    badge: "Luxe",
  },
  {
    id: 3,
    nom: "Classique Kensington",
    categorie: "classique",
    prix: 15000,
    description:
      "Tradition et confort dans ce pack 3 pièces d'une douceur remarquable. 100% coton.",
    images: [
      "images/produits/classique-kensington-1.jpg",
      "images/produits/classique-kensington-2.jpg",
      "images/produits/classique-kensington-3.jpg",
      "images/produits/classique-kensington-4.jpg",
      "images/produits/classique-kensington-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité supérieure",
      "Pack 3 pièces : drap + 2 taies",
      "Douceur incomparable",
      "Tissu résistant et durable",
      "Lavage facile - douceur préservée",
    ],
    enStock: true,
    badge: "Classique",
  },
  {
    id: 4,
    nom: "Modern Mayfair",
    categorie: "moderne",
    prix: 15000,
    description:
      "Design contemporain et douceur extrême. Pack 3 pièces en coton 100% de Londres.",
    images: [
      "images/produits/modern-mayfair-1.jpg",
      "images/produits/modern-mayfair-2.jpg",
      "images/produits/modern-mayfair-3.jpg",
      "images/produits/modern-mayfair-4.jpg",
      "images/produits/modern-mayfair-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur peau de pêche",
      "Style moderne et élégant",
      "Qualité Londres authentique",
    ],
    enStock: true,
    badge: "Moderne",
  },
  {
    id: 5,
    nom: "Élégance Britannique",
    categorie: "royal",
    prix: 15000,
    description:
      "Raffinement et douceur dans ce pack 3 pièces 100% coton de qualité supérieure.",
    images: [
      "images/produits/elegance-britannique-1.jpg",
      "images/produits/elegance-britannique-2.jpg",
      "images/produits/elegance-britannique-3.jpg",
      "images/produits/elegance-britannique-4.jpg",
      "images/produits/elegance-britannique-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité Londres",
      "Pack 3 pièces : 1 drap + 2 taies",
      "Douceur exceptionnelle",
      "Confort de sommeil optimal",
      "Lavable - repassage facile",
    ],
    enStock: true,
  },
  {
    id: 6,
    nom: "Tradition Londonienne",
    categorie: "classique",
    prix: 15000,
    description:
      "L'authenticité londonienne alliée au confort suprême. Pack 3 pièces 100% coton.",
    images: [
      "images/produits/tradition-londonienne-1.jpg",
      "images/produits/tradition-londonienne-2.jpg",
      "images/produits/tradition-londonienne-3.jpg",
      "images/produits/tradition-londonienne-4.jpg",
      "images/produits/tradition-londonienne-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur remarquable",
      "Origine Londres",
      "Qualité durable",
    ],
    enStock: true,
  },
  {
    id: 7,
    nom: "Premium Chelsea",
    categorie: "royal",
    prix: 15000,
    description:
      "Le summum du confort et de la douceur. Pack 3 pièces en coton 100% premium.",
    images: [
      "images/produits/premium-chelsea-1.jpg",
      "images/produits/premium-chelsea-2.jpg",
      "images/produits/premium-chelsea-3.jpg",
      "images/produits/premium-chelsea-4.jpg",
      "images/produits/premium-chelsea-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité premium",
      "Pack 3 pièces : drap + 2 taies",
      "Douceur peau de pêche",
      "Tissu respirant",
      "Londres qualité supérieure",
    ],
    enStock: true,
    badge: "Premium",
  },
  {
    id: 8,
    nom: "Contemporary Paddington",
    categorie: "moderne",
    prix: 15000,
    description:
      "Modernité et douceur dans ce pack 3 pièces 100% coton au design épuré.",
    images: [
      "images/produits/contemporary-paddington-1.jpg",
      "images/produits/contemporary-paddington-2.jpg",
      "images/produits/contemporary-paddington-3.jpg",
      "images/produits/contemporary-paddington-4.jpg",
      "images/produits/contemporary-paddington-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur exceptionnelle",
      "Design contemporain",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 9,
    nom: "Royal Hyde Park",
    categorie: "royal",
    prix: 15000,
    description:
      "Prestige et confort dans ce pack 3 pièces 100% coton d'une douceur luxueuse.",
    images: [
      "images/produits/royal-hyde-park-1.jpg",
      "images/produits/royal-hyde-park-2.jpg",
      "images/produits/royal-hyde-park-3.jpg",
      "images/produits/royal-hyde-park-4.jpg",
      "images/produits/royal-hyde-park-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité luxe",
      "Pack 3 pièces : 1 drap + 2 taies",
      "Douceur incomparable",
      "Toucher peau de pêche",
      "Origine Londres exclusive",
    ],
    enStock: true,
    badge: "Luxe",
  },
  {
    id: 10,
    nom: "Classic Notting Hill",
    categorie: "classique",
    prix: 15000,
    description:
      "Charme classique et douceur supérieure. Pack 3 pièces 100% coton de Londres.",
    images: [
      "images/produits/classic-notting-hill-1.jpg",
      "images/produits/classic-notting-hill-2.jpg",
      "images/produits/classic-notting-hill-3.jpg",
      "images/produits/classic-notting-hill-4.jpg",
      "images/produits/classic-notting-hill-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur remarquable",
      "Style classique intemporel",
      "Qualité Londres authentique",
    ],
    enStock: true,
  },
  {
    id: 11,
    nom: "Modern Soho",
    categorie: "moderne",
    prix: 15000,
    description:
      "Design avant-gardiste et douceur extrême. Pack 3 pièces 100% coton.",
    images: [
      "images/produits/modern-soho-1.jpg",
      "images/produits/modern-soho-2.jpg",
      "images/produits/modern-soho-3.jpg",
      "images/produits/modern-soho-4.jpg",
      "images/produits/modern-soho-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces : drap + 2 taies",
      "Douceur exceptionnelle",
      "Style moderne épuré",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 12,
    nom: "Royal Greenwich",
    categorie: "royal",
    prix: 15000,
    description:
      "Prestige royal et confort suprême. Pack 3 pièces en coton 100% de qualité supérieure.",
    images: [
      "images/produits/royal-greenwich-1.jpg",
      "images/produits/royal-greenwich-2.jpg",
      "images/produits/royal-greenwich-3.jpg",
      "images/produits/royal-greenwich-4.jpg",
      "images/produits/royal-greenwich-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité royale",
      "Pack 3 pièces complet",
      "Douceur peau de pêche",
      "Luxe et élégance",
      "Origine Londres",
    ],
    enStock: true,
    badge: "Royal",
  },
  {
    id: 13,
    nom: "Classic Camden",
    categorie: "classique",
    prix: 15000,
    description:
      "Authenticité londonienne et douceur incomparable. Pack 3 pièces 100% coton.",
    images: [
      "images/produits/classic-camden-1.jpg",
      "images/produits/classic-camden-2.jpg",
      "images/produits/classic-camden-3.jpg",
      "images/produits/classic-camden-4.jpg",
      "images/produits/classic-camden-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces : 1 drap + 2 taies",
      "Douceur exceptionnelle",
      "Style classique raffiné",
      "Qualité durable Londres",
    ],
    enStock: true,
  },
  {
    id: 14,
    nom: "Modern Shoreditch",
    categorie: "moderne",
    prix: 15000,
    description:
      "Avant-garde et confort dans ce pack 3 pièces 100% coton au design innovant.",
    images: [
      "images/produits/modern-shoreditch-1.jpg",
      "images/produits/modern-shoreditch-2.jpg",
      "images/produits/modern-shoreditch-3.jpg",
      "images/produits/modern-shoreditch-4.jpg",
      "images/produits/modern-shoreditch-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur remarquable",
      "Design contemporain",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 15,
    nom: "Royal Regent's Park",
    categorie: "royal",
    prix: 15000,
    description:
      "Élégance princière et douceur suprême. Pack 3 pièces 100% coton de luxe.",
    images: [
      "images/produits/royal-regents-park-1.jpg",
      "images/produits/royal-regents-park-2.jpg",
      "images/produits/royal-regents-park-3.jpg",
      "images/produits/royal-regents-park-4.jpg",
      "images/produits/royal-regents-park-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité luxe",
      "Pack 3 pièces : drap + 2 taies",
      "Douceur peau de pêche",
      "Prestige londonien",
      "Confort optimal",
    ],
    enStock: true,
    badge: "Luxe",
  },
  {
    id: 16,
    nom: "Classic Bloomsbury",
    categorie: "classique",
    prix: 15000,
    description:
      "Tradition et raffinement dans ce pack 3 pièces 100% coton d'une douceur exceptionnelle.",
    images: [
      "images/produits/classic-bloomsbury-1.jpg",
      "images/produits/classic-bloomsbury-2.jpg",
      "images/produits/classic-bloomsbury-3.jpg",
      "images/produits/classic-bloomsbury-4.jpg",
      "images/produits/classic-bloomsbury-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur incomparable",
      "Style classique élégant",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 17,
    nom: "Modern Canary Wharf",
    categorie: "moderne",
    prix: 15000,
    description:
      "Design urbain et douceur premium. Pack 3 pièces 100% coton contemporain.",
    images: [
      "images/produits/modern-canary-wharf-1.jpg",
      "images/produits/modern-canary-wharf-2.jpg",
      "images/produits/modern-canary-wharf-3.jpg",
      "images/produits/modern-canary-wharf-4.jpg",
      "images/produits/modern-canary-wharf-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces : 1 drap + 2 taies",
      "Douceur exceptionnelle",
      "Style moderne sophistiqué",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 18,
    nom: "Royal St. James",
    categorie: "royal",
    prix: 15000,
    description:
      "Prestige et excellence dans ce pack 3 pièces 100% coton de qualité supérieure.",
    images: [
      "images/produits/royal-st-james-1.jpg",
      "images/produits/royal-st-james-2.jpg",
      "images/produits/royal-st-james-3.jpg",
      "images/produits/royal-st-james-4.jpg",
      "images/produits/royal-st-james-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité royale",
      "Pack 3 pièces complet",
      "Douceur peau de pêche",
      "Luxe authentique",
      "Origine Londres exclusive",
    ],
    enStock: true,
    badge: "Royal",
  },
  {
    id: 19,
    nom: "Classic Marylebone",
    categorie: "classique",
    prix: 15000,
    description:
      "Élégance traditionnelle et douceur remarquable. Pack 3 pièces 100% coton.",
    images: [
      "images/produits/classic-marylebone-1.jpg",
      "images/produits/classic-marylebone-2.jpg",
      "images/produits/classic-marylebone-3.jpg",
      "images/produits/classic-marylebone-4.jpg",
      "images/produits/classic-marylebone-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces : drap + 2 taies",
      "Douceur exceptionnelle",
      "Style classique intemporel",
      "Qualité Londres durable",
    ],
    enStock: true,
  },
  {
    id: 20,
    nom: "Modern South Bank",
    categorie: "moderne",
    prix: 15000,
    description:
      "Innovation et confort dans ce pack 3 pièces 100% coton au design moderne.",
    images: [
      "images/produits/modern-south-bank-1.jpg",
      "images/produits/modern-south-bank-2.jpg",
      "images/produits/modern-south-bank-3.jpg",
      "images/produits/modern-south-bank-4.jpg",
      "images/produits/modern-south-bank-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur remarquable",
      "Design contemporain",
      "Qualité Londres",
    ],
    enStock: true,
  },
  {
    id: 21,
    nom: "Royal Covent Garden",
    categorie: "royal",
    prix: 15000,
    description:
      "Raffinement artistique et douceur suprême. Pack 3 pièces 100% coton de luxe.",
    images: [
      "images/produits/royal-covent-garden-1.jpg",
      "images/produits/royal-covent-garden-2.jpg",
      "images/produits/royal-covent-garden-3.jpg",
      "images/produits/royal-covent-garden-4.jpg",
      "images/produits/royal-covent-garden-5.jpg",
    ],
    caracteristiques: [
      "100% Coton qualité premium",
      "Pack 3 pièces : 1 drap + 2 taies",
      "Douceur peau de pêche",
      "Élégance distinctive",
      "Origine Londres",
    ],
    enStock: true,
    badge: "Luxe",
  },
  {
    id: 22,
    nom: "Classic Belgravia",
    categorie: "classique",
    prix: 15000,
    description:
      "Prestige classique et douceur incomparable. Pack 3 pièces 100% coton supérieur.",
    images: [
      "images/produits/classic-belgravia-1.jpg",
      "images/produits/classic-belgravia-2.jpg",
      "images/produits/classic-belgravia-3.jpg",
      "images/produits/classic-belgravia-4.jpg",
      "images/produits/classic-belgravia-5.jpg",
    ],
    caracteristiques: [
      "100% Coton Supérieur",
      "Pack 3 pièces complet",
      "Douceur exceptionnelle",
      "Style classique prestigieux",
      "Qualité Londres authentique",
    ],
    enStock: true,
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
                <h3 style="color: #666;">Aucun produit trouvé</h3>
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
  const recherche = document.getElementById("search-input").value.toLowerCase();

  produitsFiltres = produits.filter((produit) => {
    // Filtre par catégorie
    if (categorie !== "all" && produit.categorie !== categorie) {
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

  const message = `Bonjour! Je souhaite commander le produit suivant :%0A%0A*${
    produit.nom
  }*%0A${formaterPrix(
    produit.prix
  )}%0A%0APack 3 pièces - 100% Coton Supérieur%0A%0APouvez-vous me donner plus d'informations ?`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;
  window.open(urlWhatsApp, "_blank");
}

// Voir les détails avec galerie
function voirDetails(produitId) {
  produitActuel = produits.find((p) => p.id === produitId);
  if (!produitActuel) return;

  indexImageActuelle = 0;

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
                                <span>100% Coton Supérieur - Qualité Londres</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Pack 3 pièces complet : 1 drap + 2 taies d'oreiller</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Douceur exceptionnelle - Toucher peau de pêche</span>
                            </div>
                            <div class="proof-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Confort optimal pour un sommeil de qualité</span>
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

  console.log("🛏️ Site Luxe London initialisé avec succès!");
  console.log(`📦 ${produits.length} articles de draps chargés`);
  console.log(`💬 WhatsApp: +${numeroWhatsApp}`);
  console.log(`🎯 Tous les articles à ${formaterPrix(15000)}`);
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
