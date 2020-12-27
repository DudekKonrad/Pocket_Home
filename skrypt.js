function openTab(tabName) {
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName).style.width = "500px";
	document.getElementById('device_more').style.display = "none";
}

function closeTab(tabName) {
	document.getElementById(tabName).style.display = "none";
	document.getElementById(tabName).style.width = "500px";
	document.getElementById('device_more').style.display = "block";
}