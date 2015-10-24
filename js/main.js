var newHeight, mainNavItem, NavItem;
mainNavItem = document.getElementsByClassName("wiki");
NavItem = document.getElementsByClassName("hide");

// for(var i = 0; i < mainNavItem.length; i++){
// 	mainNavItem[i].addEventListener("click", function(){
// 		for(var j = 0; j < NavItem.length; j++){
// 			NavItem[j].classList.toggle("hide");
// 		}
// 	});
// }

window.onresize = resizer;

function resizer () {	
	
	if (window.innerWidth > 1024) {
		var main = document.getElementById('main');
		newHeight = main.offsetHeight;	
		document.getElementById('header').setAttribute('style', 'height:' + newHeight + "px");
		
	} else{
		var main = document.getElementById('main');
		document.getElementById('header').setAttribute('style', 'height:' + "auto");
	}

}	

console.log(newHeight);
console.log(main);



