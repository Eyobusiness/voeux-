// Vérifie si un nom est déjà dans l'URL (lien partagé)
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const senderName = urlParams.get('nom');

  if (senderName) {
    // Affiche un message de vœux personnalisé
    document.getElementById("message").innerHTML = `<h2>${senderName} vous souhaite une Bonne et Heureuse Année 2024 ! 🎉</h2>`;
    document.getElementById("form-section").style.display = "none"; // Cache le formulaire
  }
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
  } else {
    alert("Veuillez entrer un prénom !");
  }
});
