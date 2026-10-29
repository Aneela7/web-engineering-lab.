const slots = [
    { id: 1, start: "09:00", end: "10:00" },
    { id: 2, start: "10:00", end: "11:00", booked: true },
    { id: 3, start: "11:00", end: "12:00" },
];
const list = document.querySelector("#slot-list");
const output = document.querySelector("#output");
if (list && output) {
    list.innerHTML = slots
        .map((s) => `<li data-slot-id="${s.id}">Slot ${s.id}: ${s.start}-${s.end}</li>`)
        .join("");
    list.addEventListener("click", (event) => {
        // 1. event.target ki type EventTarget | null hai, Element mein narrow karo
        const target = event.target;
        if (!(target instanceof Element))
            return;
        // 2. closest() Element | null deta hai, null check karo
        const item = target.closest("li[data-slot-id]");
        if (item === null)
            return;
        // 3. find() Slot | undefined deta hai, undefined check karo
        const id = Number(item.dataset.slotId);
        const slot = slots.find((s) => s.id === id);
        if (slot === undefined)
            return;
        output.textContent = `${slot.start}-${slot.end} (${slot.booked ? "booked" : "free"})`;
    });
}
export {};
