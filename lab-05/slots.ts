export interface Slot {
  id: number;
  start: string;
  end: string;
  booked?: boolean;
}

export function describeSlot(slot: Slot): string {
  const status = slot.booked ? "booked" : "free";
  return `Slot ${slot.id}: ${slot.start}-${slot.end} (${status})`;
}

// Pehle se theek: shape match karti hai, extra field 'customer' chalti hai
const booking = { id: 1, start: "09:00", end: "10:00", customer: "Ali" };
console.log(describeSlot(booking));

// Fix 1: object ko pehle variable mein rakho, to extra field par error nahi aata
const saraBooking = { id: 2, start: "10:00", end: "11:00", customer: "Sara" };
console.log(describeSlot(saraBooking));

// Fix 2: missing 'end' field add kar di
const fixedBooking = { id: 3, start: "11:00", end: "12:00" };
console.log(describeSlot(fixedBooking));
