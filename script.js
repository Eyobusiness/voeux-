// Vérifie si un nom est déjà dans l'URL (lien partagé)
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const senderName = urlParams.get('nom');

  if (senderName) {
    // Affiche un message de vœux personnalisé
    document.getElementById("message").innerHTML = `<h2>${senderName} vous souhaite une Bonne et Heureuse Année 2025 ! 🎉</h2>`;
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
  } else {
    alert("Veuillez entrer un prénom !");
  }
});
