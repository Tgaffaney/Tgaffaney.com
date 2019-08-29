function setTheme() {
	var possibleThemes = ["--blue","--indigo","--pink","--red","--orange","--yellow","--teal"];
	var selectedIndex = Math.floor(Math.random() * possibleThemes.length);
	var theme = window.getComputedStyle(document.documentElement).getPropertyValue(possibleThemes[selectedIndex]);
	document.documentElement.style.setProperty('--theme', theme);
}