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
let uniq = [];
const attemptmax = 25;
let arrOfNames = [];
let arrOfVotes = [];
let arrOfShown = [];
let counter = 0;
Catalog.arrays = [];

function Catalog(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Catalog.arrays.push(this);
  // console.log(this);
  arrOfNames.push(this.name);
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
  while (
    uniq[length - 3] === first ||
    uniq[length - 2] === first ||
    uniq[length - 1] === first ||
    uniq[length - 3] === second ||
    uniq[length - 2] === second ||
    uniq[length - 1] === second ||
    uniq[length - 3] === third ||
    uniq[length - 2] === third ||
    uniq[length - 1] === third
  ) {
    // console.log("befor", first, second, third);
    first = generaterandomnumber();
    second = generaterandomnumber();
    third = generaterandomnumber();
    // uniq.push(first, second, third);
  }

  // console.log(first);
  // console.log(second);
  // console.log(third);
  uniq.push(first, second, third);
  firstimg.src = Catalog.arrays[first].source;
  // uniq.push(first);
  secondimg.src = Catalog.arrays[second].source;
  // uniq.push(second);
  thirdimg.src = Catalog.arrays[third].source;
  // uniq.push(third);

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

  // }
  console.log(uniq);
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
    // console.log(counter);
    // console.log(event.target.id);

    // for (let i = uniq.length - 3; i <= uniq.length; i++) {
    //   if (i < 0) {
    //     i = 0;
    //   }

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
    button.addEventListener("click", handelclick);
    section.removeEventListener("click", handler);
  }
}

function handelclick() {
  let tableElement = document.getElementById("table");
  for (let i = 0; i < Catalog.arrays.length; i++) {
    arrOfVotes.push(Catalog.arrays[i].votes);
    arrOfShown.push(Catalog.arrays[i].shown);
    let trelement = document.createElement("tr");
    tableElement.appendChild(trelement);
    trelement.textContent = `${Catalog.arrays[i].name} has this number of votes ${Catalog.arrays[i].votes} and shwon ${Catalog.arrays[i].shown} times `;
  }
  button.removeEventListener("click", handelclick);
  gettingchart();
}

function gettingchart() {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: arrOfNames,
      datasets: [
        {
          label: "# of Votes",
          data: arrOfVotes,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "# of shown",
          data: arrOfShown,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
