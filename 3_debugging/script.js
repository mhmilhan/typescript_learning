"use strict";
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];
function getRandomIndex() {
    console.log(darkColorsArr.length * Math.random());
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
}
getRandomIndex();
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.getElementById("bg-hex-code");
function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}
const btn = document.querySelector(".btn");
btn.onclick = changeBackgroundColor;

