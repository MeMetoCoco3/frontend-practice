const playground = document.getElementById("playground");
//const playground = document.querySelector('#playground'); // Allows to select by id
//const playground = document.querySelector('.playground'); // class
//const playground = document.querySelector('div'); // label

const magicalOrb = document.createElement('div');
magicalOrb.textContent = '🔮'

playground.appendChild(magicalOrb);
playground.append('Wizarddd!!');

// Key differences betwen this two, one works with text, the other renders html content.
// So imagine this situation
userInput = '<img src="x" onerror="alert(\'Hacked!\')">'
//playground.textContent = userInput;
//playground.innerHTML = userInput; 


// Remove child, a child is a label inside of a label.
const fruitBasket = document.createElement("div");
fruitBasket.innerHTML = `
	<p>Apple</p>
	<p>Apple</p>
	<p>Apple</p>
	<p>Apple</p>
`;
playground.append(fruitBasket);
//while (fruitBasket.firstChild){
//	fruitBasket.removeChild(fruitBasket.firstChild);
//}
fruitBasket.setAttribute("id", "fruits");
fruitBasket.setAttribute("class", "list-fruits");

//dataset, allows us to hide extra data that we can use from javascript on our html.
//this data will be ignored by css and html
// It works kind of like key-value pairs
fruitBasket.dataset.Store='Mercadona' // will appear in html as-> data--store="Mercadona"
fruitBasket.dataset.otherStuff="some,ther,stuff"; // data-other-stuff="some,ther,stuff"


//inline style
const gem = document.createElement("div");

gem.textContent = "💎";
gem.style.fontSize = '50px';
gem.style.transition = 'all 2s';
playground.append(gem);

// event handling

const button = document.createElement("button");
button.textContent = "Press me!";
playground.append(button);

button.addEventListener("click", ()=>{
//	alert('MAGIC!');
	if (fruitBasket.firstElementChild){
	fruitBasket.removeChild(fruitBasket.firstElementChild);
	}
	else{
	alert("NO MORE CHILDS!!");
	}
});
button.addEventListener("mouseover", (event)=>{
	event.target.style.backgroundColor = 'purple';
});
button.addEventListener("mouseout", (event)=>{
	event.target.style.backgroundColor = '';
});


// Creating and removing dinamically
function addFruit(fruitName){
	const fruit = document.createElement("li");
	fruit.textContent = `${fruitName}  `;
	const rmButton = document.createElement("button");
	rmButton.textContent = 'remove';
	rmButton.addEventListener('click', ()=> fruit.remove());
	fruit.append(rmButton);
	fruitBasket.append(fruit);
}
addFruit("Peach 🍑");
addFruit("Kiwi 🥝");
addFruit("Sandia 🍉");


//Traverse DOM

const parent = document.createElement("div");
const child1 = document.createElement("p");
const child2 = document.createElement("span");
parent.append(child1, child2);
playground.append(parent);
/*
parentElement.firstChild => child1
parentElement.lastChild => child2
child1.nextSibling => child2
child2.previousSibling => child1
child1.parentNode => parent
*/

// Creating document fragments
// Nos ayudan a juntar diferentes elementos en un solo documento para actualizar la pagina de una

const fragment = document.createDocumentFragment();

for (let i = 1; i < 5; i++){
	const spell = document.createElement("li");
	spell.textContent = `🔮 Magic spell num: ${i}`;

	fragment.append(spell);
}

const spellList = document.createElement("ul");
spellList.style.listStyleType = '🔮';
playground.append(spellList);
spellList.append(fragment);

const template = document.getElementById("wizard-template")

function addWizard(name, speciality){
	const wizardElement = template.content.cloneNode(true);
	wizardElement.querySelector('.wizard-name').textContent = name;
	wizardElement.querySelector('.wizard-speciality').textContent= speciality;
	playground.append(wizardElement);

}

addWizard("Katusha", 'Pig enchantress');
addWizard("Vidal", "Lord of the brick");

