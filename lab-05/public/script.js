"use strict";
const button = document.getElementById("myButton");
const message = document.getElementById("message");
if (button && message) {
    button.onclick = function () {
        message.innerHTML = "Welcome to JavaScript!";
    };
}
