const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Call loadTasks when the page initially loads
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        let taskText = inputbox.value;
        li.innerHTML = taskText;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        const taskId = Date.now().toString();
        saveTask({ id: taskId, text: taskText });

        inputbox.value = "";
    }
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        const taskId = e.target.getAttribute("data-task-id");
        updateTaskCheckedState(taskId, e.target.classList.contains("checked"));
    } else if (e.target.tagName === "SPAN") {
        const taskElement = e.target.parentElement;
        const taskId = taskElement.getAttribute("data-task-id");

        taskElement.remove();
        removeTask(taskId);
    }
}, false);

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function updateTaskCheckedState(taskId, checked) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        if (task.id === taskId) {
            task.checked = checked;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        if (task.text) { // Check if task.text is defined
            const li = document.createElement("li");
            li.innerHTML = task.text;
            li.setAttribute("data-task-id", task.id);
            listcontainer.appendChild(li);
            if (task.checked) {
                li.classList.add("checked");
            }
            listcontainer.appendChild(li);
            const span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    });
}
