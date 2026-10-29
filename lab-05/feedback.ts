import { getRequired } from "./utils.js";

interface FeedbackData {
  name: string;
  email: string;
  message: string;
}

type FieldName = keyof FeedbackData;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(field: FieldName, text: string): void {
  const el = document.querySelector<HTMLElement>(`#${field}-error`);
  if (el === null) return;
  el.textContent = text;
  el.style.color = "red";
}

function clearError(field: FieldName): void {
  const el = document.querySelector<HTMLElement>(`#${field}-error`);
  if (el === null) return;
  el.textContent = "";
}

function validate(data: FeedbackData): boolean {
  let ok = true;
  const fields: FieldName[] = ["name", "email", "message"];
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

const form = getRequired<HTMLFormElement>("#feedback-form");
const nameInput = getRequired<HTMLInputElement>("#name");
const emailInput = getRequired<HTMLInputElement>("#email");
const messageInput = getRequired<HTMLTextAreaElement>("#message");

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const data: FeedbackData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (validate(data)) {
    console.log("Feedback submitted:", data);
    form.reset();
  }
});
