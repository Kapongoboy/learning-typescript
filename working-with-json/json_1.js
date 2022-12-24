"use strict";
const section = document.querySelector('section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';
fetch(requestURL)
    .then(response => response.text())
    .then(text => displayCatInfo(JSON.parse(text)));
function displayCatInfo(catString) {
    let total = 0;
    let male = 0;
    // Add your code here
    for (const mother of catString) {
        if (mother === catString[catString.length - 1]) {
            motherInfo += "and " + mother.name + ".";
        }
        else {
            motherInfo += mother.name + ", ";
        }
        for (const kitten of mother.kittens) {
            total += 1;
            if (kitten.gender === "m") {
                male += 1;
            }
        }
    }
    kittenInfo = `there are a total of ${total} kittens, ${male} male and ${total - male} female`;
    // Don't edit the code below here!
    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}
section === null || section === void 0 ? void 0 : section.appendChild(para1);
section === null || section === void 0 ? void 0 : section.appendChild(para2);
