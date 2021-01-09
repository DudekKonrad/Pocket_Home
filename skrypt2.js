

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

var d3 = {
	"name": "Klimatyzacja2",
	"code": "2222",
	"settings": "settings_Klimatyzacja2"
}

var d4 = {
	"name": "Klimatyzacja3",
	"code": "2222",
	"settings": "settings_Klimatyzacja3"
}

var codes = ['1111', '2222'];
var names = ["Lampka Nocna", "Klimatyzacja", "Klimatyzacja2", "Klimatyzacja3"];
var AllDevices = [d1, d2, d3, d4];


if (!sessionStorage.isActive) {
	sessionStorage.setItem('AllDevices', JSON.stringify(AllDevices));
	sessionStorage.setItem('names', names);
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
	if (name.length > 15) {
		document.getElementById('name_valid').innerHTML = "Nazwa może mieć tylko 5 znaków";
		document.getElementById('device_name').style.borderColor = 'red';
	}
	if (name.length == 0) {
		document.getElementById('name_valid').innerHTML = "Musisz podać nazwę";
		document.getElementById('device_name').style.borderColor = 'red';
	}
	if (!(codes.includes(code))) {
		document.getElementById('code_valid').innerHTML = "Niepoprawny kod!";
		document.getElementById('device_code').style.borderColor = 'red';
	}
	if (names.includes(name)) {
		document.getElementById('name_valid').innerHTML = "taka nazwa już istnieje!";
		document.getElementById('device_name').style.borderColor = 'red';
	} else if (!names.includes(name) && (codes.includes(code)) && name.length != 0 && name.length <= 15) {
		names.push(name);
		sessionStorage.names += name +',';
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
		JSalert();
	}
}


function addDevice2(name, code) {
	if (code == '1111') {
		document.getElementById('devices').innerHTML +=
			'<div name=\"' + name + '\" + id=\"' + name + '\" class="device">' +
			'<h2>' + name + '</h2>' +
			'<div class="turn">' +
			'<i id=\'bulb\' class=\'far fa-lightbulb\'></i>' +
			'<label class=\"switch\">' +
			'<input type="checkbox">' +
			'<span class="slider round"></span>' +
			'</label>' +
			'</div>' +
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
			'<div class="colors">' +
			'<h2 class="text-color">Kolor światła</h2>' +

			'<input type="radio" name="drone" style="background-color: #42ea00;">' +
			'<input type="radio" name="drone" style="background-color: #ff5a04;">' +
			'<input type="radio" name="drone" style="background-color: #001283;">' +
			'<input type="radio" name="drone" style="background-color: #e70000;">' + //class="active-color"
			'<input type="radio" name="drone" style="background-color: #ff45fc;">' +
			'<input type="radio" name="drone" style="background-color: #0d64ff;">' +

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
		document.getElementById('devices').innerHTML += `
		<div class="device" id="glosnik">
            <div>
                <h2>` + name +`
                    <i class='far fa-trash-alt' onclick="deleteDevice('glosnik')"></i>
                </h2>
            </div>
            <div class="option">
                <i class="fas fa-music"></i>
                <form class="radio" onchange="validateOption('glosnik', 'muza')">
                    <label>
                        <input class="radiobutton" type="radio" name="muza" value="on"> Włącz
                    </label>
                    <label>
                        <input class="radiobutton" type="radio" name="muza" value="off"> Wyłącz
                    </label>
                </form>
                <p class="warning" id="muza"></p>

                <div>
                    <p>Głośność</p>
                    <span>10%</span>
                    <input type="range" id="volume" name="intensity" min="10" max="100">
                    <span>100%</span>
                </div>
                <div class="color-header">
                    <p>Wybierz playlistę</p>
                    <select name="playlist" id="playlist-select" class="ui search selection dropdown">
                        <option value="">Przeglądaj</option>
                        <option value="hity">Polskie hity</option>
                        <option value="trening">Trening w domu</option>
                        <option value="koledy">Kolędy</option>
                        <option value="ballady">Love Ballads</option>
                        <option value="metal">New Metal Tracks</option>
                        <option value="domowka">Domówka</option>
                        <option value="dance">Dance Classic</option>
                        <option value="rock">Rock Party</option>
                        <option value="bifor">Bifor</option>
                    </select>
                </div>
                <p class="warning" id="warning-music">Nie wybrano playlisty do odtworzenia</p>
            </div>
        </div>`
	}
}

function prepareJSON(json) {
	//sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
	var len = sessionStorage.AllDevices.length;
	var b = ",\n{\"name\":" + "\"" + temp.name + "\"" + ",\"code\":\"" + temp.code + "\"}";
	var position = len - 1;
	var output = [sessionStorage.AllDevices.slice(0, position), b, sessionStorage.AllDevices.slice(position)].join('');
	sessionStorage.setItem("AllDevices", output);
}

function refreshNames() {
	console.log(sessionStorage.getItem("names"));
	var str = sessionStorage.getItem("names");
	var res = str.split(",");
	document.getElementById('myDropdown').innerHTML = "";
	for (var i in res) {
		document.getElementById('myDropdown').innerHTML += '<a href="#' + res[i] +'" onclick="openTab(\'settings_' + res[i] + '\')">' + res[i] + '</a>'
	}
}

function refreshDevices() {
	var data = JSON.parse(sessionStorage.getItem("AllDevices"));
	for (var i in data) {
		addDevice2(data[i].name, data[i].code);
	}
	console.log(JSON.parse(sessionStorage.getItem("AllDevices")));
	refreshNames();
}

function deleteDevice1(id) {
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function deleteDevice2(id) {
	var json = JSON.parse(sessionStorage.getItem("AllDevices"));
	for (var i = 0; i < json.length; i++) {
		if (json[i].name == id) {
			json.splice(i, 1);
		}
	}
	var output = JSON.stringify(json);
	sessionStorage.setItem("AllDevices", output);
}

function deleteName(id) {
	console.log(sessionStorage.getItem('names'));
	var changed = sessionStorage.getItem('names').replace(id + ',', "");
	console.log("After first change: " + changed);
	//changed = sessionStorage.getItem('names').replace(id, "");
	//console.log("After second change: " + changed);
	sessionStorage.setItem("names", changed);
}

function deleteDevice(id) {
	deleteDevice1(id);
	deleteDevice2(id);
	deleteName(id)
	refreshNames();
}

function openTab(tabName) {
	var new_name = tabName.replace('settings_', '');
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width = p_width / 1.1 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height = "300px";
	document.getElementById(new_name + 'more_button').style.display = "none";
}

function closeTab(tabName) {
	var new_name = tabName.replace('settings_', '');
	document.getElementById(tabName).style.width = "0px";
	document.getElementById(tabName).style.height = "0px";
	document.getElementById(tabName).style.display = "none";
	document.getElementById(new_name + 'more_button').style.display = "block";
}

/**
 * Kody urządzeń
 * 1111 - Żarówka
 * 2222 - Klimatyzacja
 * 3333 - Głośnik
 */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	//document.getElementById("myDropdown").style.display = "block";
	document.getElementById("myDropdown").style.height = "265px";
}

function myFunction2() {
	document.getElementById("myDropdown").style.height = "0px";
	//document.getElementById("myDropdown").style.display = "none";
}

function filterFunction() {
	var input, filter, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

$(document).ready(function () {

	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();

	// Show tab on page load
	activeTab.show();

	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);

	$(".tabs > li").on("click", function () {

		// Remove class from active tab
		$(".tabs > li").removeClass("active");

		// Add class active to clicked tab
		$(this).addClass("active");

		// Update clickedTab variable
		clickedTab = $(".tabs .active");

		// fade out active tab
		activeTab.fadeOut(250, function () {

			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");

			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");

			// update new active tab
			activeTab = $(".tab__content > .active");

			// Update variable
			activeTabHeight = activeTab.outerHeight();

			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function () {

				// Fade in active tab
				activeTab.delay(50).fadeIn(250);

			});
		});
	});

	// Variables
	var colorButton = $(".colors li");

	colorButton.on("click", function () {

		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");

		// Add class active to clicked button
		$(this).addClass("active-color");

		// Get background color of clicked
		var newColor = $(this).attr("data-color");

		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);

		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor);
	});
});

//-------------------------

var scena1 = {
	type: "recznie",
	name: "Jestem w pracy",
	timeStart: "08:00",
	timeEnd: "16:00",
	days: ["P", "W", "Ś", "C", "Pt"],
	devices: [{
			id: "lampka_nocna",
			mode: "off"
		},
		{
			id: "glosnik",
			mode: "off"
		}
	],
	device: ['oswietlenie', 'glosnik']
};
var scena2 = {
	type: "day_and_hour",
	name: "Impreza",
	timeStart: "20:00",
	timeEnd: "23:00",
	days: ["Pt"],
	devices: [{
			id: "oswietlenie",
			mode: "on"
		},
		{
			id: "glosnik",
			mode: "on"
		}
	],
	device: ['oswietlenie', 'glosnik', 'lampka_nocna']
};

function wzorScenaManually(id, title) {
	return `<div class="scena" id="${id}">
        <div id="inside">
            <h2>${title}</h2>
            <div class="icon">
                <i class="far fa-edit" onclick="editScena('${title}')"></i>
                <i class="far fa-trash-alt" onClick="deleteScene('${id}', '${title}')"></i>
            </div>
            <div class="toggle">
                <label class="switch">
                    <input type="checkbox">
                        <span class="slider round"></span>
                </label>
            </div>
            <div style="clear:both;"></div>
        </div>
    </div>`
}

function wzorScenaAuto(id, title, daysandhours) {
	return `<div class="scena" id="${id}">
        <h2>${title}</h2>
        <div class="icon">
            <i class="far fa-edit" onclick="editScena('${title}')"></i>
            <i class="far fa-trash-alt" onClick="deleteScene('${id}', '${title}')"></i>
        </div>
        <div class="days">
            <h3>${daysandhours}</h3>
        </div>`
}


var sceny = [scena1, scena2];

let dodane_sceny = 2;

function readSessionStorage() {
	if (sessionStorage.getItem('Sceny') === null) {
		console.log("Pusty plik w bazie");
	} else {
		var data = JSON.parse(sessionStorage.getItem('Sceny'));
		sceny = data;
		dodane_sceny = sceny.length;
	}
}

function addToSessionStorage() {
	sessionStorage.setItem('Sceny', JSON.stringify(sceny));
	document.location = 'sceny.html';
}

function updateSceny() {
	let id_number = dodane_sceny;
	for (let i = 0; i < dodane_sceny; i++) {
		if (sceny[i].type === "recznie") {
			let id = "scena" + id_number;
			let title = sceny[i].name;
			document.getElementById("sceny_in").insertAdjacentHTML('afterbegin', wzorScenaManually(id, title));
			id_number--;
		}
		if (sceny[i].type === "day_and_hour") {
			let id = "scena" + id_number;
			let title = sceny[i].name;
			let day = sceny[i].days.join(" ");
			let hours = " " + sceny[i].timeStart + " - " + sceny[i].timeEnd;
			document.getElementById("sceny_in").insertAdjacentHTML('afterbegin', wzorScenaAuto(id, title, day + hours));
			id_number--;
		}
	}
}


function sprawdz_ilosc_scen() {
	if (dodane_sceny === 0) {
		document.getElementById("brak_scen").style.display = "block";
	} else {
		document.getElementById("brak_scen").style.display = "none";
	}
}


function deleteScene(id, title) {
	if (confirm("Czy chcesz usunąć scenę?")) {
		dodane_sceny--;
		let scena = document.getElementById(id);
		for (let i = 0; i < sceny.length; i++) {
			if (sceny[i].name === title) {
				sceny.splice(i, 1);
			}
		}
		scena.remove();
		sprawdz_ilosc_scen();
	} else {

	}
}

function deleteGroup() {
	var group = prompt("Podaj nazwę grupy do usunięcia");
	if (group == null || group === "") {
		console.log("Nie podano nazwy grupy")
	} else {
		if (confirm("Czy chcesz usunąć grupe?")) {
			console.log("usunięto grupe")
		}
	}
}

let numer_domownika = 1;

function sprawdz_ilosc_domownikow() {
	if (numer_domownika <= 0) {
		document.getElementById("brak_domownikow").style.display = "block";
	} else {
		document.getElementById("brak_domownikow").style.display = "none";
	}
}

let domownicy = [2, 3, 4];

function dodajDomownika() {

	if (numer_domownika === 4) {
		alert("Nie można dodać więcej domowników")
	} else {

		var imie = prompt("Podaj nazwę domownika, którego chcesz dodać");
		if (imie == null || imie === "") {
			console.log("Nie podano nazwy domownika")
		} else {
			if (imie.length > 11) {
				alert("Nazwa domownika za długa")
			} else {
				console.log("dodano domownika")
				numer_domownika++;
				let n_id = domownicy.shift();
				let id = "dom" + n_id;
				document.getElementById(id).querySelector("figcaption").innerText = imie;
				document.getElementById(id).style.display = "block";
			}
		}

	}
	sprawdz_ilosc_domownikow();
}

function usunDomownika(id) {
	if (confirm("Czy chcesz usunąć domownika?")) {
		document.getElementById(id).style.display = "none";
		numer_domownika--;
		id = id.slice(3, 4);
		domownicy.push(parseInt(id));
	}
	sprawdz_ilosc_domownikow();
}

function editScena(title) {
	for (let i = 0; i < sceny.length; i++) {
		if (sceny[i].name === title) {
			sessionStorage.setItem('Edycja', JSON.stringify(sceny[i]));
		}
	}
	document.location = 'edycjaSceny.html';
}

function updateSelectWithDevicesInSceny() {
	let data;

	if (sessionStorage.getItem('Sceny') == null) {
		data = sceny;
	} else {
		data = JSON.parse(sessionStorage.getItem('Sceny'));
	}

	for (let scena in data) {
		for (let device of data[scena].device) {

			//id select to id_rzadzenia-select
			let id_select = `${device}-select`
			let x = document.getElementById(id_select);
			let option = document.createElement("option");
			option.text = data[scena].name;
			//x.add(option);
		}
	}
}

function animateWorkingScena() {
	console.log("Start animation");
	let data;
	if (sessionStorage.getItem('Sceny') == null) {
		data = sceny;
	} else {
		data = JSON.parse(sessionStorage.getItem('Sceny'));
	}

	let array = [];

	for (let scena in data) {
		if (data[scena].type === "day_and_hour") {
			array.push(data[scena]);
		}
	}

	let id = "";

	let h2 = document.getElementsByTagName("h2");
	for (let i = 0; i < h2.length; i++) {
		if (h2[i].innerText === array[length].name) {
			id = h2[i].parentNode.id;
		}
	}
	id = `#${id}`
	setInterval(function () {
		$(id).toggleClass('scena-dziala')
	}, 30000);
}

function start() {
	refreshDevices();
	readSessionStorage();
	updateSceny();
	sprawdz_ilosc_scen();
	updateSelectWithDevicesInSceny();
	animateWorkingScena();
}

window.transitionToPage = function (href) {
	document.querySelector('body').style.opacity = 0
	setTimeout(function () {
		window.location.href = href
	}, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
	document.querySelector('body').style.opacity = 1
})


// CommonJS
const swal = require('sweetalert2')

function JSalert(){
	swal("Congrats!", ", Your account is created!", "success");
}