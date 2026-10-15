import { delay, makeCounter } from "./utils.js";
const schedule = document.querySelector("#schedule");
const bookingStatus = document.querySelector("#booking-status");
const nextNumber = makeCounter();
schedule.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;
  const row = button.closest("tr");
  if (row.classList.contains("selected")) {
    row.classList.remove("selected");
    button.textContent = "Book";
    const bookedRows = schedule.querySelectorAll("tbody tr.selected");
    bookingStatus.textContent =
      `Total booked rows: ${bookedRows.length}`;

    return;
  }
  button.disabled = true;
  button.textContent = "Please wait...";
  await delay(1000);
  row.classList.add("selected");
  const number = nextNumber();
  button.textContent = `Booked #${number}`;
  button.disabled = false;
  const bookedRows = schedule.querySelectorAll("tbody tr.selected");
  bookingStatus.textContent =
    `Total booked rows: ${bookedRows.length}`;
});
console.log("1: Start");
setTimeout(() => {
  console.log("2: Timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("3: Promise");
});
console.log("4: End");
