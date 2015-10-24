

window.onresize = resizer;

function resizer () {	
	
	if (window.innerWidth > 1024) {
		var newHeight;
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



