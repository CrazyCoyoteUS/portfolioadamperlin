//---------------------CLIC---------------------------

//SELECTION
var burger = document.getElementById('burger');

var nav = document.getElementsByTagName('nav')[0];


// EVENEMENT
burger.addEventListener('click', open);

// FONCTION
function open() {

if(nav.style.display == 'block') {
	nav.style.display = 'none';
	burger.src = 'img/menu.png';
} else { nav.style.display = 'block';
		 burger.src = 'img/cross.png';
}
}


//---------------------MESSAGE CACHE---------------------------
console.log("L'expérience, c'est le nom que chacun donne à ses erreurs. Oscar Wilde");