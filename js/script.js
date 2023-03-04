document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
    const allNavItems = document.querySelectorAll('.nav-link'); //pobranie do zmiennej wszystkiego z klasa nav-link
    const navList = document.querySelector('.navbar-collapse'); //pobranie do zmiennej nawigacji

	function addShadow() {     //funkcja dodajaca i usuwajaca klase z tlem do nawigacji
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		}
        else{
            nav.classList.remove('shadow-bg');
        }
	}

	function removeShow(){
	  navList.classList.remove('show');
	}

	// allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));  //ta sama metoda tylko inaczej zapisana 
	  //za pomoca petli forEach nasluchujemy clicka na kazdym linku z tablicy allNavItems  a pozniej to wykonanie funkcji ktora usuwa klase show 
	allNavItems.forEach(item => item.addEventListener('click', removeShow));







	window.addEventListener('scroll', addShadow);
     
});
