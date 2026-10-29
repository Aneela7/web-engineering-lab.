import { getRequired } from "./utils.js";
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function showError(field, text) {
    const el = document.querySelector(`#${field}-error`);
    if (el === null)
        return;
    el.textContent = text;
    el.style.color = "red";
}
function clearError(field) {
    const el = document.querySelector(`#${field}-error`);
    if (el === null)
        return;
    el.textContent = "";
}
function validate(data) {
    let ok = true;
    const fields = ["name", "email", "message"];
    fields.forEach(clearError);
    if (data.name === "") {
        showError("name", "Name is required");
        ok = false;
    }
    if (!isValidEmail(data.email)) {
        showError("email", "Enter a valid email");
        ok = false;
    }
    if (data.message === "") {
        showError("message", "Message is required");
        ok = false;
    }
    return ok;
}
const form = getRequired("#feedback-form");
const nameInput = getRequired("#name");
const emailInput = getRequired("#email");
const messageInput = getRequired("#message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    if (validate(data)) {
        console.log("Feedback submitted:", data);
        form.reset();
    }
});
