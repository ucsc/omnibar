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
