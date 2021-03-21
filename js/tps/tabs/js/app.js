// 1- récupérer les boutons avec la classe nav-link contenu dans .nav-tabs
// 2- appliquer un listener sur tous les boutons
// 3- vérifier est ce que l'elt n'est pas deja selectionné
// 4- récupérer l'ancien tab sélectionné

var tabs = document.querySelectorAll(".nav-tabs .nav-link");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // console.log("event : ", e);
    // console.log("tab : ", tab);
    if (!tab.classList.contains("active")) {
      var ul = tab.parentElement.parentElement;
      var oldTab = ul.querySelector(".active");
      //   console.log("oldTab : ", oldTab);
      if (oldTab) {
        // if (oldTab != undefined and oldTab != null and oldTab != 0 and oldTab != false)
        var oldTabPane = document.querySelector(oldTab.dataset.cible);
        console.log("oldTabpane : ", oldTabPane);
        oldTab.classList.remove("active");
        oldTabPane.classList.remove("show", "active");
      }
      tab.classList.add("active");
      var newTabPane = document.querySelector(tab.dataset.cible);
      newTabPane.classList.add("show", "active");
    } else {
      console.log("tab deja selectionné !");
    }
  });
});
