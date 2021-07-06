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

let numberOfShown = "";
let numberOfVotes = "";

function Catalog(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Catalog.arrays.push(this);
  // console.log(this);
  arrOfNames.push(this.name);
  arrOfVotes.push(this.votes);
  arrOfShown.push(this.shown);
  votesShown();
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
// console.log(Catalog.arrays);

function generaterandomnumber() {
  return Math.floor(Math.random() * Catalog.arrays.length);
}
// console.log(Catalog.arrays);
let first;
let second;
let third;

//instead of include

function check(second, uniq) {
  for (let i = 0; i <= uniq.length; i++) {
    if (second === uniq[i]) {
      return true;
    }
  }
  return false;
}

function renderthreeimages() {
  first = generaterandomnumber();
  second = generaterandomnumber();
  third = generaterandomnumber();

  // console.log("before", uniq);
  while (
    first === second ||
    first === third ||
    second === third ||
    uniq.includes(first) ||
    check(second, uniq) ||
    uniq.includes(third)
  ) {
    // console.log("edit", first, second, third);
    first = generaterandomnumber();
    second = generaterandomnumber();
    third = generaterandomnumber();
  }

  uniq = [first, second, third];
  // console.log(counter);

  // console.log("after", uniq);
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

  // }
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

function votesShown() {
  let covertedArr1 = JSON.stringify(Catalog.arrays);
  localStorage.setItem("votes", covertedArr1);
  // let convertedArr2 = JSON.stringify(Catalog.arrays);
  // localStorage.setItem("shown", convertedArr2);
}

function handelclick() {
  let orderlist = document.getElementById("ul1");
  let listOfvotes = document.createElement("li");
  orderlist.appendChild(listOfvotes);
  let listOfshown = document.createElement("li");
  orderlist.appendChild(listOfshown);
  let data1 = localStorage.getItem("votes");
  let parsedImg1 = JSON.parse(data1);
  // votes = parseInt(votes);
  let data2 = localStorage.getItem("shown");
  let parsedImg2 = JSON.parse(data2);
  // shown = parseInt(shown);
  for (let i = 0; i < Catalog.arrays.length; i++) {
    arrOfVotes.push(Catalog.arrays[i].votes);
    arrOfShown.push(Catalog.arrays[i].shown);
    Catalog.numberOfVotes = parsedImg1;
    Catalog.numberOfShown = parsedImg2;
    listOfvotes.textContent = `${Catalog.arrays[i].name} has this number of votes ${Catalog.arrays[i].votes}`;
    listOfshown.textContent = `${Catalog.arrays[i].name} shwon ${Catalog.arrays[i].shown} times `;
  }
  button.removeEventListener("click", handelclick);
  gettingchart();
}
console.log(arrOfVotes);
console.log(arrOfShown);
function gettingchart() {
  let ctx = document.getElementById("myChart");
  let myChart = new Chart(ctx, {
    type: "pie",
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

//7 / 6 / 2021;

//the key  , the value
// localStorage.setItem("the name", "ehab");
// localStorage.age = "26";
// //the key , the value
// localStorage.setItem("the pass", 56789);
// localStorage.name = "ehab";
// console.log(localStorage.getItem("the pass"));
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));
// localStorage.removeItem("age");
// localStorage.removeItem("the pass");
// localStorage.removeItem("name");
// remove the whole localStorage

//localStorage.clear();
