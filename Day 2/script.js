const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.setAttribute("tabindex", "0"); // Make li focusable
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Add delete symbol
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

listContainer.addEventListener("keydown", function (e) {
    const focusedElement = document.activeElement;
    if (focusedElement.tagName === "LI") {
        if (e.key === "Enter") {
            focusedElement.classList.toggle("checked");
        } else if (e.key === "Delete" || e.key === "Backspace") {
            focusedElement.remove();
        }
    }
});