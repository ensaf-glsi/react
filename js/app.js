function ex1() {
  var n = 13;
  console.log(n, typeof n);

  var s = "salut";
  console.log(s, typeof s);

  var b = false;
  console.log(b, typeof b);

  b = "chaine 1";
  console.log(b, typeof b);

  var x;
  x = 123;

  console.log(x, typeof x);

  console.log(null, typeof null);

  console.log(123 + "45");

  console.log(123 + "45" * 1);

  var exp = 3 == "3";
  console.log('3 == "3" : ', exp);

  console.log('3 === "3" : ', 3 === "3");
  console.log('3 !== "3" : ', 3 !== "3");
}

function tableau() {
  var tab = [12, 34, "salut", true];
  console.log(tab[2]);
  tab[1] = undefined;

  console.log("tab : ", tab);

  console.log("tab length : ", tab.length);

  tab.push(30);
  console.log(tab);

  var fruits = ["Apple", "Banana"];

  console.log(fruits.indexOf("Banana"));
  console.log(fruits.indexOf("Banan"));
}

function objets() {
  var p = {
    nom: "JANATI",
    prenom: "Ahmed",
    genre: "M",
    age: 30,
    adresse: {
      rue: "Route Ain chkef",
      ville: "fes",
      codePostal: 30000,
    },
    telephones: ["06 73 82 02 02", "06 63 82 02 04"],
  };

  console.log(p);
  console.log(p.nom, p.adresse.rue, p.telephones[0]);
}

function conditions() {
  // resoude equation 1 er degre : ax + b = 0 (-b / a) : b = 0 2 = 0
  var a = 2,
    b = 1;

  if (a === 0) {
    if (b === 0) {
      console.log("R");
    } else {
      console.log("Ens vide");
    }
  } else {
    console.log("sol : ", -b / a);
  }

  // if (c1) {
  //     // ...
  // } else if (c2) {
  //     // ...
  // } else if (c3) {
  //     // ...
  // } else {
  //    // ...
  // }

  // switch (a) {
  //   case 1:
  //     //...
  //     break;
  //   case 2:
  //     //...
  //     break;
  //   case 3:
  //     //...
  //     break;
  //   default:
  // }

  // if (a === 1) {
  //   //...
  // } else if (a === 2) {
  // } else if (a === 3) {
  // } else {
  // }
}
var tab = [1, 2, 4, 10];
console.log(tab);

function boucles() {
  for (var i = 0; i < tab.length; i++) {
    console.log("elt [" + i + "] : ", tab[i]);
  }
  i = 0;
  while (i < tab.length) {
    console.log("elt [" + i + "] : ", tab[i]);
    i++;
  }

  i = 0;
  do {
    console.log("elt [" + i + "] : ", tab[i]);
    i++;
  } while (i < tab.length);
}
// boucles();

// console.log(adition(3, 5));

function adition(a, b) {
  console.log("a : ", a);
  console.log("b : ", b);
  console.log(arguments);
  var result = a + b;
  return result;
}
// console.log(result); // error
console.log(factoriel); // undefined
// console.log(factoriel(4)); // undefined(4) : error
var factoriel = function (n) {
  if (!Number.isInteger(n) || n < 0) {
    throw Error("N doit etre un nombre positif");
  }
  var r = 1;
  for (var i = 2; i <= n; i++) {
    r *= i; // <=> r = r * i
  }
  return r;
};

// console.log(factoriel(5));

function ex2() {
  var t = [3, 2, 53, 12, 14, 89];
  console.log(t);
  var tp = [];
  for (var i = 0; i < t.length; i++) {
    var item = t[i];
    if (item % 2 === 0) {
      tp.push(item);
    }
  }
  console.log("Les nombres paires : ", tp);

  var tp10 = [];
  for (var i = 0; i < t.length; i++) {
    var item = t[i];
    if (item % 2 === 0 && item >= 10) {
      tp10.push(item);
    }
  }
  console.log("Les nombres paires > 10 : ", tp10);

  function filter(arr, predicate) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (predicate(item) === true) {
        result.push(item);
      }
    }
    return result;
  }

  tp = filter(t, function (nb) {
    return nb % 2 === 0;
  });
  console.log("Les nombres paires : ", tp);

  var pp10 = function (item) {
    return item % 2 === 0 && item >= 10;
  };
  tp10 = filter(t, pp10);
  console.log("Les nombres paires > 10 : ", tp10);

  t.forEach(function (item, i, tab) {
    console.log(i, item);
  });

  function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      fn(item, i, arr);
    }
  }
}
// ex2();

var fonct1 = () => {};

var fonct1 = function () {};
function arrays() {
  var t = [3, 2, 53, 12, 14, 89];
  var tp = t.filter(function (nb) {
    return nb % 2 === 0;
  });
  tp = t.filter((nb) => {
    return nb % 2 === 0;
  });
  tp = t.filter((nb) => nb % 2 === 0);

  console.log(tp);

  function map(arr, m) {
    var result = [];
    arr.forEach((item) => {
      result.push(m(item));
    });
    return result;
  }
}
// arrays();

function motCleThis() {
  function f1() {
    console.log(this);
  }
  f1();
  var p = {
    nom: "JANATI",
    prenom: "Ahmed",
    genre: "M",
    age: 30,
    adresse: {
      rue: "Route Ain chkef",
      ville: "fes",
      codePostal: 30000,
    },
    telephones: ["06 73 82 02 02", "06 63 82 02 04"],
    nomComplet: function () {
      console.log("nom complet - this : ", this);
      return this.nom + " " + this.prenom;
    },
    listDesTels: function () {
      var s = "";
      console.log("1 - ", this);
      // var self = this;
      // this.telephones.forEach(function (item) {
      //   console.log("2 - ", self);
      //   s += item + ", ";
      // });
      this.telephones.forEach((item) => {
        console.log("2 - ", this);
        s += item + ", ";
      });
    },
  };
  // console.log(p.nomComplet());
  console.log(p.listDesTels());
}

// motCleThis();

function exceptions() {
  try {
    console.log("avant erreur");
    console.log(xy);
    console.log("apres erreur");
  } catch (e) {
    console.warn("erreur ? ", e.message, e.stack);
  } finally {
    console.log("finally bloc");
  }
  console.log("apres finally");
}

exceptions();

var factoriel = function (n) {
  if (!Number.isInteger(n) || n < 0) {
    throw Error("N doit etre un nombre positif");
  }
  var r = 1;
  for (var i = 2; i <= n; i++) {
    r *= i; // <=> r = r * i
  }
  return r;
};

console.log(factoriel(4));
// console.log(factoriel(-1));
// console.log(factoriel("fo"));
