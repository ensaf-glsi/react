function jeux() {
  var nbCherche = Math.round(Math.random() * 10); // 3
  // var n = window.prompt("Entrez un nombre : "); // 3
  console.log(nbCherche);
  do {
    var n = window.prompt("Entrez un nombre : "); // 3

    if (n == nbCherche) {
      alert("Bravo ! ");
    } else if (n < nbCherche) {
      alert("au dessous");
    } else {
      alert("au dessus");
    }
  } while (nbCherche != n);
}
function ex2() {
  var dec = confirm("Etes vous sur de vouloir supprimer .... ? ");
  console.log(dec);
}

function ex3() {
  console.log(timer);
  setTimeout(() => {
    console.log(timer);
    console.log("message apres 1s");
    // clearTimeout(timer);
  }, 1000);
  var timer = setTimeout(() => {
    console.log("message apres 3s");
  }, 3000);
}
// ex3();

function ex4() {
  var horloge = document.getElementById("horloge");

  var showDate = () => {
    var d = new Date();
    horloge.innerHTML = d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
  showDate();
  var timer = setInterval(showDate, 1000);
  setTimeout(() => {
    clearInterval(timer);
  }, 10000);
}

ex4();
