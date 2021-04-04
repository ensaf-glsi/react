// ES6 : es 2015

class Person {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  nomComplet() {
    return this.nom + " " + this.prenom;
  }
}

class Etudiant extends Person {
  constructor(nom, prenom, cne) {
    super(nom, prenom);
    this.cne = cne;
  }

  moyenne() {
    return 12;
  }
}

// syntaxe d'une classe avant 2015
function Personne(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
}
Personne.prototype.nomComplet = function () {
  return this.nom + " " + this.prenom;
};

let Etudiant2 = function (nom, prenom, cne) {
  Personne.call(this, nom, prenom); // <=> super
  this.cne = cne;
};

Etudiant2.prototype = Object.create(Personne.prototype);
Etudiant2.prototype.constructor = Etudiant2;
