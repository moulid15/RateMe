function show(section) {
	var c = document.getElementById("settingsForm").children;
	for (i = 0; i < c.length - 1; i++) {
		c[i].style.display = "none";
	}
	document.getElementById(section).style.display = "block";
}
