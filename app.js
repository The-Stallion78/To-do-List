const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Please Add a Task");
    } else {
        let li = document.createElement ("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // symbol of 'x'
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle ("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To store the Tasks in the Local Storage.
function saveData() {
    localStorage.setItem ("data", listContainer.innerHTML);
}

// To show the Tasks when next time window is opened.
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // function call