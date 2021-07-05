"use strict";

let section = document.getElementById("catalog");
let firstimg = document.createElement("img");
firstimg.id = "first-img";
section.appendChild(firstimg);
firstimg.setAttribute("src", "");

let secondimg = document.createElement("img");
secondimg.id = "second-img";
section.appendChild(secondimg);
secondimg.setAttribute("src", "");

let thirdimg = document.createElement("img");
thirdimg.id = "third-img";
section.appendChild(thirdimg);
thirdimg.setAttribute("src", "");

const attemptmax = 25;

let counter = 0;
Catalog.arrays = [];

function Catalog(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Catalog.arrays.push(this);
  // console.log(this);
}

new Catalog("bag", "img/bag.jpg"); //0
new Catalog("banana", "img/banana.jpg"); //1
new Catalog("bathroom", "img/bathroom.jpg"); //2
new Catalog("boots", "img/boots.jpg"); //3
new Catalog("breakfast", "img/breakfast.jpg"); //4
new Catalog("bubblegum", "img/bubblegum.jpg"); //5
new Catalog("chair", "img/chair.jpg"); //6
new Catalog("cthulhu", "img/cthulhu.jpg"); //7
new Catalog("dog-duck", "img/dog-duck.jpg"); //8
new Catalog("dragon", "img/dragon.jpg"); //9
new Catalog("pen", "img/pen.jpg"); //10
new Catalog("scissors", "img/scissors.jpg"); //11
new Catalog("shark", "img/shark.jpg"); //12
new Catalog("sweep", "img/sweep.png"); //13
new Catalog("tauntaun", "img/tauntaun.jpg"); //14
new Catalog("unicorn", "img/unicorn.jpg"); //15
new Catalog("water-can", "img/water-can.jpg"); //16
new Catalog("wine-glass", "img/wine-glass.jpg"); //17
new Catalog("pet-sweep", "img/pet-sweep.jpg"); //18

function generaterandomnumber() {
  return Math.floor(Math.random() * Catalog.arrays.length);
}
// console.log(Catalog.arrays);
let first;
let second;
let third;

function renderthreeimages() {
  first = generaterandomnumber();
  second = generaterandomnumber();
  third = generaterandomnumber();

  while (first === second || first === third || second === third) {
    if (first === second || first === third) {
      first = generaterandomnumber();
    } else if (second === third) {
      second = generaterandomnumber();
    }
  }
  // console.log(first);
  // console.log(second);
  // console.log(third);
  firstimg.src = Catalog.arrays[first].source;
  secondimg.src = Catalog.arrays[second].source;
  thirdimg.src = Catalog.arrays[third].source;

  Catalog.arrays[first].shown++;
  Catalog.arrays[second].shown++;
  Catalog.arrays[third].shown++;
  // console.log(Catalog.arrays[18]);
  // console.log(Catalog.arrays[12]);
}

renderthreeimages();

section.addEventListener("click", handler);
let button;
function handler(event) {
  counter++;
  if (counter <= attemptmax) {
    if (event.target.id === "first-img") {
      Catalog.arrays[first].votes++;
    } else if (event.target.id === "second-img") {
      Catalog.arrays[second].votes++;
    } else if (event.target.id === "third-img") {
      Catalog.arrays[third].votes++;
    } else if (event.target.id === "catalog") {
      counter--;
      return;
    }
    console.log(counter);
    console.log(event.target.id);
    renderthreeimages();
  } else {
    let khabi = document.getElementById("khabi");
    let khabiimg = document.createElement("img");
    khabi.appendChild(khabiimg);
    khabiimg.src = "img/Imagem623.jpg";
    button = document.createElement("button");
    khabi.appendChild(button);
    button.setAttribute("content", "test value");
    button.textContent = "view result";
    section.removeEventListener("click", handler);
    button.addEventListener("click", handelclick);
  }
}

function handelclick() {
  let tableElement = document.getElementById("table");
  for (let i = 0; i < Catalog.arrays.length; i++) {
    let trelement = document.createElement("tr");
    tableElement.appendChild(trelement);
    trelement.textContent = `${Catalog.arrays[i].name} has this number of votes ${Catalog.arrays[i].votes} and shwon ${Catalog.arrays[i].shown} times `;
  }
  section.removeEventListener("click", handler);
  button.removeEventListener("click", handelclick);
  button.removeEventListener("click", handler);
}
