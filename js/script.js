function getData() {
  let figure = document.getElementById("figure");

  svg.forEach(element => {
    figure.innerHTML += `<figure class="compliment mr-12 mb-24 mt-0 ml-0" onclick="getSelected(event)"  >
                                  ${element.icon}
                            <figcaption class="compliment-title">${element.caption}</figcaption>
                          </figure>`;
  });
}
function getSelected(e) {
  let value = e.target;
  const figSel = "#ffffff";
  const figUnsel = "#2cc6d0";
  let figColor;
  if (e.target.tagName !== "FIGURE") {
    value = e.target.parentNode;
  }
  let svgFill = value.getElementsByClassName("icon-fill");
  let svgStroke = value.getElementsByClassName("icon-stroke");
  let figCaption = value.getElementsByClassName("compliment-title");

  if (!value.classList.contains("selected-figure")) {
    value.classList.add("selected-figure");
    figColor = figSel;
  } else {
    value.classList.remove("selected-figure");
    figColor = figUnsel;
  }
  if (svgFill && svgFill.length) {
    svgFill[0].style.fill = figColor;
  }
  if (svgStroke && svgStroke.length) {
    svgStroke[0].style.stroke = figColor;
  }
  if (figCaption && figCaption.length) {
    figCaption[0].style.color = figColor;
  }
}
function onConfirm() {
  document.location = "thankyou.html";
}
function submitRating() {
  document.location = "review.html";
}
