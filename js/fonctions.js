function ex1() {
  function f1() {
    console.log("fonction f1");
  }

  var f2 = function () {
    console.log("fonction f2");
  };

  var f3 = () => {
    console.log("fonction f3");
  };

  function executeFunc(fn) {
    console.log(typeof fn);
    if (typeof fn === "function") {
      fn();
    } else {
      console.warn("fn n est pas une fonction");
    }
  }

  f1();

  executeFunc(f3);

  var v = "fwe";
  executeFunc(v);

  var tab = [2, 4, 3, 7];

  function nbPaireFilter(nb) {
    return nb % 2 === 0;
  }
  console.log(tab.filter(nbPaireFilter));
  console.log(tab.filter((nb) => nb % 2 !== 0));
}

Array.prototype.filtrer = function (fn) {
  //   console.log(arguments);
  //   console.log("obj appelant : ", this);
  var result = [];
  for (var i = 0; i < this.length; i++) {
    var elt = this[i];
    // console.log("elt " + i + " : ", elt);
    if (fn(elt, i) === true) {
      result.push(elt);
    }
  }
  return result;
};

var nbImpaire = (nb) => {
  console.log("elt passé a fn : ", nb);
  return nb % 2 !== 0;
};
var nbPaire = (nb, index) => {
  console.log("elt passé a fn : ", nb, index);
  return nb % 2 === 0;
};
var tab = [1, 4, 7, 9, 2];
console.log(tab.filtrer(nbImpaire, 3, 6, 9));
console.log(tab.filtrer(nbPaire, 3, 6, 9));
