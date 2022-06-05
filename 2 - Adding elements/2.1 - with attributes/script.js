let elementType = "div";
let elementText = "Child 7";
let parentElement = document.getElementById("parent_1");
let elementId = "child_7";

function addElement(type, text, parent, id) {
  let newElement = document.createElement(type);
  let newElementText = document.createTextNode(text);
  newElement.appendChild(newElementText);
  newElement.setAttribute("id", id);
  parent.appendChild(newElement);
}

addElement(elementType, elementText, parentElement, elementId);
