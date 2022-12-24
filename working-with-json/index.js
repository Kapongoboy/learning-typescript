"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function populate() {
    return __awaiter(this, void 0, void 0, function* () {
        const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
        const request = new Request(requestURL);
        const response = yield fetch(request);
        const superHeroes = yield response.json();
        populateHeader(superHeroes);
        populateHeroes(superHeroes);
    });
}
function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header === null || header === void 0 ? void 0 : header.appendChild(myH1);
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.homeTown} // formed: ${obj.formed}`;
    header === null || header === void 0 ? void 0 : header.appendChild(myPara);
}
function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;
    for (const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';
        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section === null || section === void 0 ? void 0 : section.appendChild(myArticle);
    }
}
populate();
