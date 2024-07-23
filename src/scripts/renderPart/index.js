import { addsElementList } from './renderList';
import { renderInfoRepository } from './renderForm';

export function mainTask() {
    const searchInput = document.querySelector(".wrapper__search-input__inner");
    const searchList = document.querySelector(".wrapper__search-input__variant");
    const addedList = document.querySelector(".wrapper__added-items");
    let timerId;
  
    searchInput.addEventListener('input', function () {
      clearTimeout(timerId);
      const query = searchInput.value.trim();
      if (query) {
        timerId = setTimeout(function () {
          fetch(`https://api.github.com/search/repositories?q=${query}&per_page=5`)
            .then(response => response.json())
            .then(data => {
              addsElementList(data.items, searchList);
            });
        }, 300);
      } else {
        searchList.textContent = '';
      }
    });
  
    searchList.addEventListener('click', function (event) {
      if (event.target && event.target.matches('.wrapper__search-input__variant-btn')) {
        const repo = JSON.parse(event.target.dataset.repo);
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