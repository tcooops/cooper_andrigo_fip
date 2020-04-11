// JavaScript Document

// burger menu //

(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);

// start svg toggles //


let allSVGs = document.querySelectorAll('.svg')

	function toggleSVG() {

		this.classList.toggle('selected');
	}

	allSVGs.forEach(item => item.addEventListener("mousedown", toggleSVG));


})();
