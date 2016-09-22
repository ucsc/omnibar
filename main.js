function subButton(txt) {
  var url = "http://www.google.com/search?q=" + txt + " site:ucsc.edu";
  window.open(url);
}

function checkSubmit() {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}

function expand() {
	var nav = document.getElementById("menuItems");
	if (nav.className === "menuNav") {
		nav.className += " responsive";
	} else {
		nav.className = "menuNav"
	}
}
