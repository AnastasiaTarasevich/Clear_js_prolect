function renderInfoRepository(items,addedList){
    const infoForm=document.createElement('div');
    infoForm.classList.add('wrapper__added-items__info');
    const infoName=document.createElement('p');
    infoName.classList.add('wrapper__added-items__info-inner');
    infoName.textContent=`Название: ${items.name}`;
    const infoOwner=document.createElement('p');
    infoOwner.classList.add('wrapper__added-items__info-inner');
    infoOwner.textContent=`Владелец: ${items.owner.login}`;
    const infoStars=document.createElement('p');
    infoStars.classList.add('wrapper__added-items__info-inner');
    infoStars.textContent=`Звёзды: ${items.stargazers_count}`;
    const infoBtn=document.createElement('button');
    infoBtn.classList.add('wrapper__added-items__info-btn');
    infoBtn.textContent='Удалить';
    infoBtn.addEventListener('click', () => {
        infoForm.remove();
    });
    infoForm.appendChild(infoName);
    infoForm.appendChild(infoOwner);
    infoForm.appendChild(infoStars);
    infoForm.appendChild(infoBtn);

    addedList.appendChild(infoForm);
}
export {renderInfoRepository};