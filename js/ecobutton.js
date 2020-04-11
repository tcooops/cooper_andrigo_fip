// JavaScript Document

(() => {
// start eco lightbox //

	var lightBox = document.querySelector(".lightbox");
    var ecoTrigger = document.querySelector(".eco-trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleLightBox() {
        lightBox.classList.toggle("show-lightbox");
    }

    function windowOnClick(event) {
        if (event.target === lightBox) {
            toggleLightBox();
        }
    }

    ecoTrigger.addEventListener("click", toggleLightBox);
    closeButton.addEventListener("click", toggleLightBox);
    window.addEventListener("click", windowOnClick);
		
})();