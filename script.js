const list = document.getElementById("infi-list");

let itemCount = 0;

// function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

// 1️⃣ Add 10 items by default
addItems(10);

// 2️⃣ Infinite scrolling logic
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // add 2 more items when end is reached
    addItems(2);
  }
});
