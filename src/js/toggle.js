var tg = document.getElementsByClassName("toggle");
var t;
window.addEventListener('load', function() {
	for (t = 0; t < tg.length; t++) {
	    tg[t].onclick = function(){
	        this.classList.toggle("active");
	        this.nextElementSibling.classList.toggle("show");
	    }
	}
});