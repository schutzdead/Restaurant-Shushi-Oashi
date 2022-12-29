function ongletMenu () {
const container2 = document.createElement('div');
const title2 = document.createElement('div');

container2.classList.add('container2', 'hidden');
title2.classList.add('title2');
container2.append(title2)
title2.textContent = "Menu"
document.querySelector('body').append(container2);
}

export {ongletMenu}