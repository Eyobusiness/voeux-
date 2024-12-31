// Vérifie si un nom est déjà dans l'URL (lien partagé)
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const senderName = urlParams.get('nom');

  if (senderName) {
    // Affiche un message de vœux personnalisé
    document.getElementById("message").innerHTML = `<h2>${senderName} vous souhaite une Bonne et Heureuse Année 2025 ! 🎉 <br>Que cette nouvelle année vous apporte bonheur, santé et réussite. Profitez de chaque instant avec vos proches et réalisez vos rêves les plus chers." 🎉 </h2>`;
  }

  // Le formulaire reste visible pour permettre à l'utilisateur de générer son propre lien
  document.getElementById("form-section").style.display = "block";
};

// Génère un lien personnalisé
document.getElementById("generate-link").addEventListener("click", function () {
  const userName = document.getElementById("user-name").value.trim();

  if (userName) {
    // Crée un lien avec le nom de l'utilisateur
    const link = `${window.location.origin}${window.location.pathname}?nom=${encodeURIComponent(userName)}`;
    document.getElementById("share-link").value = link;

    // Affiche la section de partage
    document.getElementById("share-section").style.display = "block";

    // Affiche un message pour l'utilisateur qui partage
    document.getElementById("message").innerHTML = `<h2>Vous souhaitez une Bonne Année 2025 en tant que ${userName} ! 🎉</h2>`;

    // Configure les boutons de partage
    configureShareButtons(link);
  } else {
    alert("Veuillez entrer un prénom !");
  }
});

// Bouton pour copier le lien
document.getElementById("copy-link").addEventListener("click", function () {
  const linkInput = document.getElementById("share-link");
  linkInput.select(); // Sélectionne le texte
  linkInput.setSelectionRange(0, 99999); // Pour mobile
  document.execCommand("copy"); // Copie dans le presse-papiers
  alert("Lien copié dans le presse-papiers !");
});

// Configure les boutons de partage
function configureShareButtons(link) {
  // Partage via WhatsApp
  const whatsappButton = document.getElementById("share-whatsapp");
  whatsappButton.onclick = function () {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Je te souhaite une Bonne Année 2025 ! Voici un lien pour partager tes vœux : " + link)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Partage via Facebook
  const facebookButton = document.getElementById("share-facebook");
  facebookButton.onclick = function () {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    window.open(facebookUrl, "_blank");
  };
}
