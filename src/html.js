//generate HTML skeleton
import Icon from './sushi.png'
import Icon1 from './home.png'
import Icon2 from './menu.png'
import Icon3 from './contact.png'
import {ongletMenu} from './menu.js'
import {ongletContact} from './contact.js'

ongletMenu();
ongletContact();

const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')

const title = document.createElement('div');
const picture = document.createElement('img');
const text = document.createElement('div');
const container = document.createElement('div');

const onglet = document.createElement('div');
const onglet1 = document.createElement('div');
const onglet2 = document.createElement('div');
const onglet3 = document.createElement('div');


document.querySelector('body').insertBefore(container, container2);
document.querySelector('body').insertBefore(onglet, container);

onglet.classList.add('onglet')
onglet1.classList.add('onglet1')
onglet2.classList.add('onglet2')
onglet3.classList.add('onglet3')
container.classList.add('container');
title.classList.add('title');
picture.classList.add('picture');
text.classList.add('text');

container.append(title, picture, text);
onglet.append(onglet1, onglet2, onglet3)

title.textContent = "Sushi Oashi"
picture.src=Icon;
text.innerHTML="Savourez nos bons repas fait sur place par notre maître sushi. <br><br>発見してください";

onglet1.innerHTML=`Home<img src="${Icon1}" class="test">`;
onglet2.innerHTML=`Menu<img src="${Icon2}" class="test">`;
onglet3.innerHTML=`Contact<img src="${Icon3}" class="test">`;

function hidden (one, two, three) {
    one.classList.add('hidden');
    two.classList.add('hidden');
    three.classList.remove('hidden');
}

onglet1.addEventListener('click', () => {
    hidden(container2, container3, container)
})
onglet2.addEventListener('click', () => {
    hidden(container, container3, container2)
})
onglet3.addEventListener('click', () => {
    hidden(container, container2, container3)
})




