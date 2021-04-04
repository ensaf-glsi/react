export class DomBuilder {
  static createElement(tagName, attributes = {}, ...children) {
    const element = document.createElement(tagName);

    Object.entries(attributes).forEach(([key, value]) => {
      //   console.log(`key : ${key}, value : ${value}`);
      //   console.log("key : " + tab[0] + ", value : " + tab[1]);
      element.setAttribute(key, value);
    });
    element.append(...children);
    // children.forEach((elt) => {
    //   element.append(elt);
    // });

    return element;
  }
}
