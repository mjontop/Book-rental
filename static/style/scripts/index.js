function showMenu() {
	if (document.getElementsByClassName("tohide")[0].style.display == "none") {
		document.getElementsByClassName("tohide")[0].style.display = "inline";
		document.getElementsByClassName("tohide")[1].style.display = "inline";
		document.getElementsByClassName("tohide")[2].style.display = "inline";
	} else {
		document.getElementsByClassName("tohide")[0].style.display = "none";
		document.getElementsByClassName("tohide")[1].style.display = "none";
		document.getElementsByClassName("tohide")[2].style.display = "none";
	}
}
