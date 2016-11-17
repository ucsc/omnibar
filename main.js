// Creates a link that searches google for the keyword in relation to ucsc.edu
function subButton(txt) {
  var url = "http://www.google.com/search?q=" + txt + " site:ucsc.edu";
  window.open(url);
}

// Checks to see if the enter key was pressed, if so submits the form
function checkSubmit() {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}

// When click the menu on a small screen, adds "responsive" class so that menu items are revealed
function expand() {
	var inner = document.getElementById("inner");
	var nav = document.getElementById("menuItems");
	if (nav.className === "menuNav") {
		nav.className += " responsive";
		if (window.outerWidth < 875 && window.outerWidth > 580) {
			inner.style.paddingBottom = "55px";
		}
		if (window.outerWidth < 580) {
			inner.style.paddingBottom = "15px";
		}
	} else {
		nav.className = "menuNav";
		inner.style.paddingBottom = "0px";
	}
}
