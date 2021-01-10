var d1 = {
	"name": "Lampka Nocna",
	"code": "1111",
}
var d2 = {
	"name": "Klimatyzacja",
	"code": "2222",
	"settings" : "settings_Klimatyzacja"
}

var d3 = {
	"name": "Głośnik w salonie",
	"code": "3333",
}

var codes = ['1111', '2222', '3333'];
var names = ["Lampka Nocna", "Klimatyzacja", "Głośnik w salonie"];
var AllDevices = [d1, d2, d3];


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
	if (name.length > 20) {
		document.getElementById('name_valid').innerHTML = "Nazwa może mieć tylko 20 znaków";
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
	var Devices = JSON.parse(sessionStorage.getItem("AllDevices"));
	for (var i in Devices){
		names.push(Devices[i].name);
	}
	if (names.includes(name)) {
		document.getElementById('name_valid').innerHTML = "Nazwa już istnieje!";
		document.getElementById('device_name').style.borderColor = 'red';
	} else if (!names.includes(name) && (codes.includes(code)) && name.length != 0 && name.length <= 20) {
		
		var temp = {
			"name": name,
			"code": code
		}
		AllDevices = JSON.parse(sessionStorage.getItem('AllDevices'));
		console.log("Before push: " + sessionStorage.getItem("AllDevices"));
		AllDevices.push(temp);
		sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
		addDevice2(name, code);
		//sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
		//var len = sessionStorage.AllDevices.length;
		//var b = `{"name":"` + temp.name + `","code":"` + temp.code + `"},`;
		//var position = len - 1;
		//var output = [sessionStorage.AllDevices.slice(0, position), b, sessionStorage.AllDevices.slice(position)].join('');
		JSalert(name);
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
			'<i class=\'far fa-trash-alt\' onclick= "JSalertDelete(\'' + name + '\')"></i>' +
			'<i id=\"' + name + 'less_button\"' + 'class=\'fas fa-angle-double-left\' onclick="closeTab(\'settings_' + name + '\')"></i>' +

			'<div class="temperature">' +
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
			'<option value="AUTO">Automatyczna</option>' +
			'<option value="chłodzenie">Chłodzenie</option>' +
			'<option value="wentylator">Wentylator</option>' +
			'<option value="suche">Osuszanie powietrza</option>' +
			'<option value="Ogrzewanie">Ogrzewanie</option>' +
			'<option value="eco">Eco</option>' +
			'</select>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>'
	}

	if (code == '3333') {
		console.log("Adding speaker.");
		document.getElementById('devices').innerHTML += addSpeaker(name);
	}
}



/*function refreshNames() {
	console.log("Names: " + sessionStorage.getItem("names"));
	var str = sessionStorage.getItem("names");
	if (str[str.length - 1] == ",") {
		str = str.slice(0, str.length - 1)
		console.log("Nazwy po usunieciu przecinka na koncu: " + str);
	}
	var res = str.split(",");
	document.getElementById('myDropdown').innerHTML = "";
	for (var i in res) {
		document.getElementById('myDropdown').innerHTML += `<a href="#` + res[i] + `" onclick="openTab('settings_` + res[i] + `')">` + res[i] + `</a>`;
	}
	console.log(document.getElementById('myDropdown').innerHTML);
}*/

function refreshDevices2() {
	console.log("AllDevices: " + sessionStorage.getItem("AllDevices"))
	var data = JSON.parse(sessionStorage.getItem("AllDevices"));
	for (var i in data) {
		addDevice2(data[i].name, data[i].code);
	}
	//refreshNames();
}

function refreshDevices() {
	console.log(sessionStorage.getItem("AllDevices"));
	var data = JSON.parse(sessionStorage.getItem("AllDevices"));
	for (var i in data) {
		addDevice2(data[i].name, data[i].code);
	}
	refreshNames();
}

function deleteDevice1(id) {
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function deleteDevice2(id) {
	var refreshed = sessionStorage.getItem("AllDevices")
	console.log("Before parse all devices: " + refreshed);
	console.log(refreshed[refreshed.length - 2]);
	if (refreshed[refreshed.length - 2] === ',') {
		console.log("Cutting");
		refreshed = refreshed.slice(0, refreshed.length - 2);
		refreshed += "]";
		console.log("After cut: " + refreshed);
	}
	var json = JSON.parse(refreshed);
	for (var i = 0; i < json.length; i++) {
		if (json[i].name == id) {
			json.splice(i, 1);
		}
	}
	var output = JSON.stringify(json);
	sessionStorage.setItem("AllDevices", output);
}

function deleteName(id) {
	var nazwy = sessionStorage.getItem('names');
	console.log("Names before delete:" + nazwy)
	nazwy = nazwy.replace(id, "");
	nazwy = nazwy.replace(",,", ",");
	if (nazwy[0] == ',') {
		nazwy = nazwy.slice(1);
	}
	if (nazwy[nazwy.length - 1] == ",") {
		nazwy = nazwy.slice(0, nazwy.length - 1);
	}
	console.log("Nazwy final: " + nazwy);
	sessionStorage.setItem('names', nazwy);
}

function deleteDevice(id) {
	deleteDevice1(id);
	deleteDevice2(id);
	deleteName(id)
	refreshNames();
}

function openTab(tabName) {
	console.log("Will open " + tabName);
	var new_name = tabName.replace('settings_', '');
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width = p_width / 1.1 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height = "430px";
	document.getElementById(new_name + 'more_button').style.display = "none";
}


function closeTab(tabName) {
	var new_name = tabName.replace('settings_', '');
	document.getElementById(tabName).style.width = "0px";
	document.getElementById(tabName).style.height = "0px";
	document.getElementById(tabName).style.display = "none";
	document.getElementById(new_name + 'more_button').style.display = "block";
}

function refreshNames(){
	var Devices = JSON.parse(sessionStorage.getItem("AllDevices"));
	document.getElementById('myDropdown').innerHTML = "";
	for (var i in Devices){
		var name = Devices[i].name;
		//document.getElementById('myDropdown').innerHTML += `<a href="${"#" + name}" onclick="openTab('${"settings_" + name}')"> ${name} </a>`;
		document.getElementById('myDropdown').innerHTML += '<a href="#' + name +'" onclick="openTab(\'settings_' + name + '\')">' + name + '</a>'
	}
	console.log(document.getElementById('myDropdown').innerHTML);
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
	document.getElementById("myDropdown").style.height = "265px";
	//document.getElementById("myDropdown").style.display = "block";
}

function myFunction2() {
	//document.getElementById("myDropdown").style.display = "none";
	document.getElementById("myDropdown").style.height = "0px";
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
    type: "day_and_hour",
    name: "Jestem w pracy",
    timeStart: "08:00",
    timeEnd: "16:00",
    days: ["P", "W", "Ś", "C", "Pt"],
    devices: [
        {
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
    type: "recznie",
    name: "Impreza",
    timeStart: "20:00",
    timeEnd: "23:00",
    days: ["Pt"],
    devices: [
        {
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

function wzorScenaManually(id, title){
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

function wzorScenaAuto(id, title, daysandhours){
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
        console.log("Odczytano dane z bazy");
        sceny = data;
        dodane_sceny = sceny.length;
    }
}

function addToSessionStorage() {
    sessionStorage.setItem('Sceny', JSON.stringify(sceny));
    document.location= 'sceny.html';
}

function updateSceny(){
    let id_number = dodane_sceny;
    console.log("update");
   // console.log(sceny);
    for(let i = 0; i < dodane_sceny; i++){
        //console.log(sceny[i].type);
        if(sceny[i].type === "recznie"){
            let id = "scena" + id_number;
            let title = sceny[i].name;
            document.getElementById("sceny_in").insertAdjacentHTML('afterbegin' ,wzorScenaManually(id, title));
            id_number--;
        }
        if(sceny[i].type === "day_and_hour"){
            let id = "scena" + id_number;
            let title = sceny[i].name;
            let day = sceny[i].days.join(" ");
            let hours = " " + sceny[i].timeStart + " - " + sceny[i].timeEnd;
            document.getElementById("sceny_in").insertAdjacentHTML('afterbegin' ,  wzorScenaAuto(id, title, day + hours));
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
        for(let i = 0; i < sceny.length; i++){
            if(sceny[i].name === title){
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
        // if (numer_domownika === 4) {
        //     alert("Nie można dodać więcej domowników")
        // } else {
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

function editScena(title){
    for(let i = 0; i < sceny.length; i++){
        if(sceny[i].name === title){
            sessionStorage.setItem('Edycja', JSON.stringify(sceny[i]));
        }
    }
    document.location= 'edycjaSceny.html';
}

function updateSelectWithDevicesInSceny(){
    let data;

    if(sessionStorage.getItem('Sceny') == null){
        data = sceny;
        console.log("select pusty");
        //console.log(data);
    }else{
        data = JSON.parse(sessionStorage.getItem('Sceny'));
        console.log("select pełny");
        //console.log(data);
    }
    console.log(data)

    for (let scena in data) {
       console.log(data[scena])
        for(let device of data[scena].device) {

            //id select to id_rzadzenia-select
            let id_select = `${device}-select`
            let x = document.getElementById(id_select);
            let option = document.createElement("option");
            option.text = data[scena].name;
            //x.add(option);
        }
    }
}

function animateWorkingScena(){
	console.log("Start animation");
    let data;
    if(sessionStorage.getItem('Sceny') == null){
        data = sceny;
        console.log("select pusty");
        //console.log(data);
    }else{
        data = JSON.parse(sessionStorage.getItem('Sceny'));
        console.log("select pełny");
        //console.log(data);
    }

    let array = [];

    for (let scena in data) {
        if(data[scena].type === "day_and_hour"){
            array.push(data[scena]);
        }
    }

    let id = "";

    let h2 = document.getElementsByTagName("h2");
    for(let i = 0; i < h2.length; i++) {
        if(h2[i].innerText === array[length].name){
            id = h2[i].parentNode.id;
        }
    }
    id = `#${id}`
    console.log(id)
    setInterval(function(){$(id).toggleClass('scena-dziala')}, 30000);
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


function JSalert(name) {
	swal("Gratulacje! Dodano:" + name + "", "", "success");
}

function JSalertDelete(id) {
	swal({
			title: "Jesteś pewny?",
			text: "Nie będzie można przywrócić usuniętego urządzenia!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				swal("Brawo! Urządzenie " + id + " zostało usunięte!", {
					icon: "success",
				});
				deleteDevice(id)
			} else {
				swal("Oj! Urządzenie " + id + " nie zostało usunięte!");
			}
		});
}

//Funkcje urządzeń

function addSpeaker(name) {
	var result = `<div name=" ` + name + `" + id="` + name + `" class="device">
	<h2>` + name + `</h2>
	<div class="turn">
		<!--Ikona-->
		<i id='speaker' class='fas fa-music'></i>
		<label class="switch">
			<input type="checkbox">' +
			<span class="slider round"></span>' +
		</label>
	</div>

	<i id="` + name + `more_button" class="fas fa-angle-double-right" onclick="openTab('settings_` + name + `')"></i>
	
	<!--Ustawienia-->
	<div class="device_more" id="settings_` + name + `">
		<!--Usuwanie-->
		<i class='far fa-trash-alt' onclick="deleteDevice('` + name + `')"></i>
		<i id="` + name + `less_button" class='fas fa-angle-double-left' onclick="closeTab('settings_` + name + `')"></i>
		<!--Usuwanie-->

		<!--Ustawienia DALEJ-->

		<div class="album_container">
		<img src="images/slawomir.jpg">
		<div class="slider_container" id="slider_container2">
		<label for="myRange2"> Głośność</label>
			<input orient="vertical" type="range" min="0" max="100" value="50" class="slider_x" id="myRange2" oninput="this.nextElementSibling.value=this.value">
			<output>50</output>
			<br>
		</div>
		</div>


		<span>Akutalnie odtwarzany utwór: </span>
		<div class="scroll_container">
		<p>Sławomir - Miłość w Zakopanem </p>
		</div>
	</div>`
	return result;
}