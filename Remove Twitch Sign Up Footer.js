// ==UserScript==
// @name         Remove Twitch Sign Up Footer
// @namespace    https://github.com/thaph03
// @version      1.0
// @description  delete sign up pop up on twitch
// @author       Thai Pham
// @match        *://*.twitch.tv/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeSignUpPopUp() {
        const popUp = document.querySelector(".ceAbGI");
        if (popUp) {
            popUp.style.display = "none";
        } else {
            // Try again in 500ms if the pop-up is not found
            setTimeout(removeSignUpPopUp, 500);
        }
    }

    // Wait for the DOM to fully load
    window.addEventListener('load', removeSignUpPopUp);
})();
