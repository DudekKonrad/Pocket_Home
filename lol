stary search
span></span>
			<input type="text" placeholder="Search..." id="myInput" onkeyup="filterFunction()" onclick="myFunction()">
			<button id="search_device" class="dropbtn" onclick="showList()"></button>




css

.dropdown input {
  font-family: 'Arial';
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: black 2px solid;
  background: white;
  color: black;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  transition: all 0.7s;
  opacity: 0;
  z-index: 5;
  letter-spacing: 0.1em;
}

.dropdown input:hover {
  cursor: pointer;
}

.dropdown input:focus {
  width: 300px;
  opacity: 1;
  cursor: text;
}

.dropdown input:focus {
  right: -400px;
}

.dropdown input:focus~.search::before {
  top: 0;
  left: 0;
  width: 25px;
}

.dropdown input:focus~.search::after {
  top: 0;
  left: 0;
  width: 25px;
  height: 2px;
  border: none;
  background: black;
  border-radius: 0%;
  transform: rotate(-45deg);
}

.dropdown input::placeholder {
  color: grey;
  opacity: 0.5;
}