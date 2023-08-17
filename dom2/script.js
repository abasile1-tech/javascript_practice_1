console.log("Hello World");

const square = (num) => num * num;

console.log(square(5));

console.log(window);
console.log(document);

const h1 = document.querySelector("h1");
h1.textContent = "Fringe Events!";

const event_h3 = document.querySelector(".event h3");

event_h3.textContent = "Shit-faced Rabbie Burns";

const events = document.querySelectorAll(".event");

for (const event of events) {
  console.log(event);
}

event_h3.classList.add("active");
console.log(event_h3.classList);

const button = document.getElementById("add-event");

// Try making rapid, repeated clicks on the button to
// increase the click count. If you take a break between clicks,
// the count will reset.
button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
