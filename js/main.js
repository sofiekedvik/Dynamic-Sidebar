var newHeight, mainNavItem, NavItem, main;
mainNavItem = document.getElementsByClassName("wiki");
NavItem = document.getElementsByClassName("hide");

window.onresize = resizer;

function resizer () {	
	main = document.getElementById('main');
	if (window.innerWidth > 1024) {
		newHeight = main.offsetHeight;	
		document.getElementById('aside').setAttribute('style', 'height:' + newHeight + "px");
		
	} else{
		document.getElementById('aside').setAttribute('style', 'height:' + "auto");
	}

}	

MenuHandler();
function MenuHandler () {
	for(var i = 0; i < mainNavItem.length; i++){
		mainNavItem[i].addEventListener("click", function(){
			this.childNodes[1].classList.toggle("hide");
			this.classList.toggle("imageflip");
		});
	}
	
}

