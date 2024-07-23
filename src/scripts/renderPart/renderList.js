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
export {addsElementList};