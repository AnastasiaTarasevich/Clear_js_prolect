/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./scripts/renderPart/renderList.js
function addsElementList(items, searchList) {
  searchList.textContent = '';
  items.forEach(function (item) {
    var btn = document.createElement('button');
    btn.classList.add('wrapper__search-input__variant-btn');
    btn.textContent = item.name;
    btn.dataset.repo = JSON.stringify(item);
    searchList.appendChild(btn);
  });
}

;// CONCATENATED MODULE: ./scripts/renderPart/renderForm.js
function renderInfoRepository(items, addedList) {
  var infoForm = document.createElement('div');
  infoForm.classList.add('wrapper__added-items__info');
  var infoName = document.createElement('p');
  infoName.classList.add('wrapper__added-items__info-inner');
  infoName.textContent = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(items.name);
  var infoOwner = document.createElement('p');
  infoOwner.classList.add('wrapper__added-items__info-inner');
  infoOwner.textContent = "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(items.owner.login);
  var infoStars = document.createElement('p');
  infoStars.classList.add('wrapper__added-items__info-inner');
  infoStars.textContent = "\u0417\u0432\u0451\u0437\u0434\u044B: ".concat(items.stargazers_count);
  var infoBtn = document.createElement('button');
  infoBtn.classList.add('wrapper__added-items__info-btn');
  infoBtn.textContent = 'Удалить';
  infoBtn.addEventListener('click', function () {
    infoForm.remove();
  });
  infoForm.appendChild(infoName);
  infoForm.appendChild(infoOwner);
  infoForm.appendChild(infoStars);
  infoForm.appendChild(infoBtn);
  addedList.appendChild(infoForm);
}

;// CONCATENATED MODULE: ./scripts/renderPart/index.js


function mainTask() {
  var searchInput = document.querySelector(".wrapper__search-input__inner");
  var searchList = document.querySelector(".wrapper__search-input__variant");
  var addedList = document.querySelector(".wrapper__added-items");
  var timerId;
  searchInput.addEventListener('input', function () {
    clearTimeout(timerId);
    var query = searchInput.value.trim();
    if (query) {
      timerId = setTimeout(function () {
        fetch("https://api.github.com/search/repositories?q=".concat(query, "&per_page=5")).then(function (response) {
          return response.json();
        }).then(function (data) {
          addsElementList(data.items, searchList);
        });
      }, 300);
    } else {
      searchList.textContent = '';
    }
  });
  searchList.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.wrapper__search-input__variant-btn')) {
      var repo = JSON.parse(event.target.dataset.repo);
      renderInfoRepository(repo, addedList);
      searchInput.value = '';
      searchList.textContent = '';
    }
  });
  addedList.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.wrapper__added-items__info-btn')) {
      event.target.closest('.wrapper__added-items__info').remove();
    }
  });
}
;// CONCATENATED MODULE: ./scripts/index.js


mainTask();
/******/ })()
;