let textToChange = document.getElementsByTagName(`div`)[0];
let colorToApply = document.getElementById(`color`);
let fontSizeToApply = document.getElementById(`size`);
let arrowOne = (element, newColor) => {
    element.style.color = newColor;
}

let arrowTwo = (element, newFontSize) => {
    element.style.fontSize = `${newFontSize}px`;
}


let oneBtn = document.getElementById(`oneBtn`);
oneBtn.addEventListener("click", function() {
    arrowOne(textToChange,colorToApply.value);
    arrowTwo(textToChange,Number(fontSizeToApply.value));
    console.log(Number(fontSizeToApply.value))
})
