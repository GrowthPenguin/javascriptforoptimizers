let childElements = document.getElementsByClassName("child");
for (childElement of childElements) {
  if (childElement.innerText.includes("2")) {
    childElement.classList.add("hide");
  }
}
