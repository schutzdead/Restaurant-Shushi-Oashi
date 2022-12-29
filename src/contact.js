function ongletContact () {
const title3 = document.createElement('div');
const container3 = document.createElement('div');

container3.classList.add('container3', 'hidden');
title3.classList.add('title3');
container3.append(title3);
title3.textContent = "Contact";
document.querySelector('body').append(container3);
}

export{ongletContact}