function openTab(tabName) {
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width += p_width / 2 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height += p_height / 2 + "px";
	document.getElementById('more_button').style.display = "none";
	document.getElementById('more_button').style.maxWidth = 'none';
}

function closeTab(tabName) {
	document.getElementById(tabName).style.display = "none";
	document.getElementById('more_button').style.display = "block";
}