window.addEventListener('load', function() {

  'use strict';

  // list out the vars
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mClose = getId('modal_close'),
      modal = getId('modal-holder'),
      page = getId('page'),
      modalOpen = false,
      lastFocus;


  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id);
  }


  // Let's open the modal
  function modalShow () {
    lastFocus = document.activeElement;
    page.setAttribute('aria-hidden', 'true');
    mOverlay.setAttribute('aria-hidden', 'false');
    modalOpen = true;
    modal.setAttribute('tabindex', '0');
    modal.focus();
  }


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function modalClose ( event ) {
    if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      mOverlay.setAttribute('aria-hidden', 'true');
      page.setAttribute('aria-hidden', 'false');
      modal.setAttribute('tabindex', '-1');
      modalOpen = false;
      lastFocus.focus();
    }
  }

  // Restrict focus to the modal window when it's open.
  // Tabbing will just loop through the whole modal.
  // Shift + Tab will allow backup to the top of the modal,
  // and then stop.
  function focusRestrict ( event ) {
    document.addEventListener('focus', function( event ) {
      if ( modalOpen && !modal.contains( event.target ) ) {
        event.stopPropagation();
        modal.focus();
      }
    }, true);
  }

  // Close modal window by clicking on the overlay
  mOverlay.addEventListener('click', function( e ) {
    if (e.target == modal.parentNode) {
       modalClose( e );
     }
  }, false);


  // open modal by btn click/hit
  mOpen.addEventListener('click', modalShow);

  // close modal by btn click/hit
  mClose.addEventListener('click', modalClose);

  // close modal by keydown, but only if modal is open
  document.addEventListener('keydown', modalClose);

  // restrict tab focus on elements only inside modal window
  window.addEventListener('keypress', focusRestrict);

});
function globalnav() {
    var x = document.getElementById("global-nav");
    if (x.className === "global-nav") {
        x.className += " responsive";
    } else {
        x.className = "global-nav";
    }
}
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b){if(b){var c=document.createDocumentFragment(),d=!a.getAttribute("viewBox")&&b.getAttribute("viewBox");d&&a.setAttribute("viewBox",d);for(var e=b.cloneNode(!0);e.childNodes.length;)c.appendChild(e.firstChild);a.appendChild(c)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.svg,e)})}},b.onreadystatechange()}function c(c){function d(){for(var c=0;c<l.length;){var g=l[c],h=g.parentNode;if(h&&/svg/i.test(h.nodeName)){var i=g.getAttribute("xlink:href");if(e&&(!f.validate||f.validate(i,h,g))){h.removeChild(g);var m=i.split("#"),n=m.shift(),o=m.join("#");if(n.length){var p=j[n];p||(p=j[n]=new XMLHttpRequest,p.open("GET",n),p.send(),p._embeds=[]),p._embeds.push({svg:h,id:o}),b(p)}else a(h,document.getElementById(o))}}else++c}k(d,67)}var e,f=Object(c),g=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,h=/\bAppleWebKit\/(\d+)\b/,i=/\bEdge\/12\.(\d+)\b/;e="polyfill"in f?f.polyfill:g.test(navigator.userAgent)||(navigator.userAgent.match(i)||[])[1]<10547||(navigator.userAgent.match(h)||[])[1]<537;var j={},k=window.requestAnimationFrame||setTimeout,l=document.getElementsByTagName("use");e&&d()}return c});
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