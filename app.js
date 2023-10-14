import { data } from "./data.js";
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let description = document.querySelector(".description");
let previus = document.querySelector(".previus");
let next = document.querySelector(".next");
let random = document.querySelector(".random");

let index = 0;
image.src = data[index].image;
name.innerHTML = data[index].name;
job.innerHTML = data[index].job;
description.innerHTML = data[index].text;


function useData(data, index) {
    image.src = data[index].image;
    name.innerHTML = data[index].name;
    job.innerHTML = data[index].job;
    description.innerHTML = data[index].text;
}

previus.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    console.log(index);
    useData(data, index);
});
next.addEventListener("click", () => {
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    useData(data, index);
});
random.addEventListener("click", () => {
    index = Math.floor(Math.random() * data.length);
    useData(data, index);
});
