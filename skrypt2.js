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
	if (name.length >= 20) {
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
	} else if (!names.includes(name) && (codes.includes(code)) && name.length != 0 && name.length < 20) {
		names.push(name);
		sessionStorage.names += ',' + name;
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
	}
}


function addDevice2(name, code) {
	if (code == '1111') {
		document.getElementById('devices').innerHTML +=
			'<div id=\"' + name + '\" class="device">' +
			'<h2>' + name + '</h2>' +
			'<div class="turn">'+
			'<i id=\'bulb\' class=\'far fa-lightbulb\'></i>' +
			'<label class=\"switch\">' +
			'<input type="checkbox">' +
			'<span class="slider round"></span>' +
			'</label>' +
			'</div>'+
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
			'<div class="content__wrapper">' +
			'<h2 class="text-color">Kolor światła</h2>' +

			'<ul class="colors">' +
			'<li data-color="#2ecc71"></li>' +
			'<li data-color="#D64A4B"></li>' +
			'<li data-color="#8e44ad"></li>' +
			'<li data-color="#46a1de"></li>' + //class="active-color"
			'<li data-color="#bdc3c7"></li>' +
			'</ul>' +
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

function prepareJSON(json) {
	//sessionStorage.setItem("AllDevices", JSON.stringify(AllDevices));
	var len = sessionStorage.AllDevices.length;
	var b = ",\n{\"name\":" + "\"" + temp.name + "\"" + ",\"code\":\"" + temp.code + "\"}";
	var position = len - 1;
	var output = [sessionStorage.AllDevices.slice(0, position), b, sessionStorage.AllDevices.slice(position)].join('');
	sessionStorage.setItem("AllDevices", output);
}

function refreshNames() {
	var str = sessionStorage.getItem("names");
	var res = str.split(",");
	document.getElementById('myDropdown').innerHTML = "";
	for (var i in res) {
		document.getElementById('myDropdown').innerHTML += '<a onclick="openTab(\'settings_' + res[i] + '\')">' + res[i] + '</a>'
		//<a onclick="openTab('settings_Klimatyzacja')">Opens</a>
		//<a onclick="openTab('settings_Klimatyzacja')">Klimatyzacja</a>
	}
	console.log(document.getElementById("dropdown").innerHTML);
}

function refreshDevices() {
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
	var changed = sessionStorage.getItem('names').replace(id + ',', "");
	sessionStorage.setItem("names", changed);
}

function deleteDevice(id) {
	deleteDevice1(id);
	deleteDevice2(id);
	deleteName(id)
	refreshNames();
}

function openTab(tabName) {
	console.log("Begin: " + tabName);
	var new_name = tabName.replace('settings_', '');
	console.log("After replace: " + new_name);
	document.getElementById(tabName).style.display = "block";
	var p_width = document.getElementById("devices").offsetWidth;
	document.getElementById(tabName).style.width = p_width / 1.1 + "px";
	var p_height = document.getElementById("devices").offsetHeight;
	document.getElementById(tabName).style.height = p_height / 2 + "px";
	document.getElementById(new_name + 'more_button').style.display = "none";
}

function closeTab(tabName) {
	var new_name = tabName.replace('settings_', '');
	document.getElementById(tabName).style.width = "0px";
	document.getElementById(tabName).style.height = "0px";
	document.getElementById(tabName).style.display = "none";
	document.getElementById(new_name + 'more_button').style.display = "block";
}

/*
W jakich scenach jest dane urządzenie,
*/

/**
 * Kody urządzeń
 * 1111 - Żarówka
 * 2222 - Klimatyzacja
 * 3333 - Głośnik
 */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
	var input, filter, ul, li, a, i;
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

$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
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
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
	
	// Variables
	var colorButton = $(".colors li");
	
	colorButton.on("click", function(){
		
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