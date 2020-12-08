function navBar_toggle() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById("NavBar").style.top = "0";
	}
	else {
		document.getElementById("NavBar").style.top = "-107px";
	}
}