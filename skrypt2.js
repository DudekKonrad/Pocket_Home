var d1 = {
	"name": "Lampka Nocna",
	"code": "1111",
	"settings": "settings_Lampka Nocna"
}
var d2 = {
	"name": "Klimatyzacja",
	"code": "2222",
	"settings": "settings_Klimatyzacja"
}

var codes = ['1111', '2222'];
var names = new Array();
var AllDevices = [d1, d2]


if (!sessionStorage.isActive) {
	sessionStorage.setItem('AllDevices', JSON.stringify(AllDevices));
	console.log("Siema");
	sessionStorage.isActive = 1;
}

function printDevices() {
	for (var i in AllDevices) {
		console.log(i + ": " + AllDevices[i].name);
	}
}

function addDevice(name, code) {
	document.getElementById('device_name').style.borderColor = 'gray';
	document.getElementById('name_valid').innerHTML = "";
	document.getElementById('device_code').style.borderColor = 'gray';
	document.getElementById('code_valid').innerHTML = "";

	console.log("Adding device");
	if (name.length >= 20) {
		console.log("Too long name");
		document.getElementById('name_valid').innerHTML = "Nazwa może mieć tylko 5 znaków";
		document.getElementById('device_name').style.borderColor = 'red';
	}
	if (name.length == 0) {
		console.log("Enter name!");
		document.getElementById('name_valid').innerHTML = "Musisz podać nazwę";
		document.getElementById('device_name').style.borderColor = 'red';
	}
	if (!(codes.includes(code))) {
		console.log("Includes:" + self.codes.includes(code, 0));
		console.log("Invalid code");
		document.getElementById('code_valid').innerHTML = "Niepoprawny kod!";
		document.getElementById('device_code').style.borderColor = 'red';
	}
	if (names.includes(name)) {
		console.log("Includes:" + names.includes(name));
		console.log("Name repeated");
		document.getElementById('name_valid').innerHTML = "taka nazwa już istnieje!";
		document.getElementById('device_name').style.borderColor = 'red';
	} else if (!names.includes(name) && (codes.includes(code)) && name.length != 0 && name.length < 20) {
		names.push(name);
		var temp = {
			"name": name,
			"code": code
		}
		addDevice2(name, code);
		//sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
		var len = sessionStorage.AllDevices.length;
		var b = ",\n{\"name\":" + "\"" + temp.name + "\"" + ",\"code\":\"" + temp.code + "\"}";
		var position = len - 1;
		var output = [sessionStorage.AllDevices.slice(0, position), b, sessionStorage.AllDevices.slice(position)].join('');
		sessionStorage.setItem("AllDevices", output);
		console.log(sessionStorage.getItem("AllDevices"));
	}
}


function addDevice2(name, code) {
	if (code == '1111') {
		document.getElementById('devices').innerHTML +=
			'<div id=\"' + name + '\" class="device">' +
			'<h2>' + name + '</h2>' +
			'<i id=\'bulb\' class=\'far fa-lightbulb\'></i>' +
			'<label class=\"switch\">' +
			'<input type="checkbox">' +
			'<span class="slider round"></span>' +
			'</label>' +
			'<i id=\"' + name + 'more_button\"' + 'class="fas fa-angle-double-right" onclick="openTab(\'settings_' + name + '\')"></i>' +
			'<div class="device_more" id="settings_' + name + '\">' +
			'<i class=\'far fa-trash-alt\' onclick="deleteDevice(\'' + name + '\')"></i>' +
			'<i id=\"' + name + 'less_button\"' + 'class=\'fas fa-angle-double-left\' onclick="closeTab(\'settings_' + name + '\')"></i>' +
			'<div class="slider_container">' +
			'<i id=\'sun\' class=\'fas fa-sun\'></i>' +
			'<label for="myRange"> Intensywność światła</label>' +
			'<input type="range" min="0" max="100" value="50" class="slider_x" id="myRange" oninput="this.nextElementSibling.value=this.value">' +
			'<output>50</output>' +
			'<br>' +
			'</div>' +

			'<div class="color_container">' +
			'<label for="color_input"> Kolor Światła: </label>' +
			'<input type="color" id="color_input" name="head">' +
			'</div>' +
			'</div>' +
			'</div>'
	}

	if (code == '2222') {
		document.getElementById('devices').innerHTML +=
			'<div id=\"' + name + '\" class=\'device\'>' +
			'<h2>' + name + '</h2>' +
			'<i id=\'clima\' class=\'fas fa-wind\'></i>' +
			'<label class="switch">' +
			'<input type="checkbox">' +
			'<span class="slider round"></span>' +
			'</label>' +

			'<i id=\"' + name + 'more_button\"' + 'class="fas fa-angle-double-right" onclick="openTab(\'settings_' + name + '\')"></i>' +
			'<div class="device_more" id="settings_' + name + '\">' +
			'<i class=\'far fa-trash-alt\' onclick="deleteDevice(\'' + name + '\')"></i>' +
			'<i id=\"' + name + 'less_button\"' + 'class=\'fas fa-angle-double-left\' onclick="closeTab(\'settings_' + name + '\')"></i>' +

			'<div class="temperature">' +
			'<button onclick="decrementValue()"><i class="fas fa-minus"></i></button>' +
			'<span id="temp">20 &#x2103</span>' +
			'<button onclick="incrementValue()"><i class="fas fa-plus"></i></button>' +
			'</div>' +

			'<div class="power">' +

			'<span>Moc</span>' +
			'<div class="powerPickerOption">' +
			'<input type="radio" id="powerSmall" name="moc">' +
			'<label for="powerSmall"><i id="moc1" class="fas fa-fan"></i></label>' +
			'</div>' +
			'<div class="powerPickerOption">' +
			'<input type="radio" id="powerMedium" name="moc">' +
			'<label for="powerMedium"><i id="moc2" class="fas fa-fan"></i></label>' +
			'</div>' +
			'<div class="powerPickerOption">' +
			'<input type="radio" id="powerBig" name="moc">' +
			'<label for="powerBig"><i id="moc3" class="fas fa-fan"></i></label>' +
			'</div>' +
			'<div class="powerPickerOption">' +
			'<input type="radio" id="auto" name="moc">' +
			'<label class="button-auto" for="auto"><b>AUTO</b></label>' +
			'</div>' +

			'<p class="warning">Wybierz jedno</p>' +

			'<div class="color-header">' +
			'<span>Tryb</span>' +
			'<select name="type" id="type-select" class="ui search selection dropdown">' +
			'<option value="">Przeglądaj</option>' +
			'<option value="AUTO">AUTO</option>' +
			'<option value="chłodzenie">Chłodzenie</option>' +
			'<option value="wentylator">Wentylator</option>' +
			'<option value="suche">Osuszanie powietrza</option>' +
			'<option value="Ogrzewanie">ogrzewanie</option>' +
			'<option value="eco">ECO</option>' +
			'</select>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>'
	}

	if (code == '3333') {

	}
}

function prepareJSON(json){
	//sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
	var len = sessionStorage.AllDevices.length;
	var b = ",\n{\"name\":" + "\"" + temp.name + "\"" + ",\"code\":\"" + temp.code + "\"}";
	var position = len - 1;
	var output = [sessionStorage.AllDevices.slice(0, position), b, sessionStorage.AllDevices.slice(position)].join('');
	sessionStorage.setItem("AllDevices", output);
	console.log(sessionStorage.getItem("AllDevices"));
}

function refreshDevices() {
	console.log("Refreshing...");
	console.log("Before parse to JSON: " + sessionStorage.getItem("AllDevices"))
	var data = JSON.parse(sessionStorage.getItem("AllDevices"));
	console.log(data);
	for (var i in data) {
		addDevice2(data[i].name, data[i].code);
	}
	for (var i = 0; i < names.length; i ++){
		console.log("Names: " + names[i]);
	}
}

function deleteDevice1(id) {
	// Removes an element from the document
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function deleteDevice2(id) {
	var json = JSON.parse(sessionStorage.getItem("AllDevices"));
	console.log("Parsed JSON with devices: ");
	console.log(json);
	console.log("json[0]: " + json[0]["name"]);
	console.log("json.length: " + json.length);
	console.log("json[0].name: " + json[0].name);
	console.log("Will remove:" + id);
	for (var i = 0; i < json.length; i++) {
		if (json[i].name == id) {
			console.log("Deleted: " + json[i].name);
			json.splice(i, 1);
		}
	}
	console.log(json);
	console.log("json.length after delete: " + json.length);
	console.log(JSON.stringify(json));
	var output = JSON.stringify(json);
	sessionStorage.setItem("AllDevices", output);
}

function deleteDevice(id) {
	deleteDevice1(id);
	deleteDevice2(id);
}

function openTab(tabName) {
	console.log("Tab name: " + tabName);
	var new_name = tabName.replace('settings_', '');
	console.log("New name: " + new_name);
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width = p_width / 1.1 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height = p_height / 2 + "px";
	document.getElementById(new_name + 'more_button').style.display = "none";
}

function closeTab(tabName) {
	console.log("Tab name: " + tabName);
	var new_name = tabName.replace('settings_', '');
	console.log("New name: " + new_name);
	document.getElementById(tabName).style.width = "0px";
	document.getElementById(tabName).style.height = "0px";
	document.getElementById(tabName).style.display = "none";
	document.getElementById(new_name + 'more_button').style.display = "block";
}

/*
W jakich scenach jest dane urządzenie,
Wyszukiwanie urządzeń
*/

/**
 * Kody urządzeń
 * 1111 - Żarówka
 * 2222 - Klimatyzacja
 * 3333 - Głośnik
 */