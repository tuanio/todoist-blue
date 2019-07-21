let tasks = document.getElementById("tasks");
let btnAddTask = document.getElementById("btn-add-task");

btnAddTask.addEventListener("click", addTasks);
txt.className = "txt";
// txtDescription.className = "txt-des"

function addTasks() {
    let warn = document.getElementById("warn");
    let txt = document.getElementById("txt");
    let addTask = document.getElementById("add-task");
    let task = document.createElement('task');
    let done = document.createElement('input');
    let sparate = document.createElement('div');
    let announce = document.createElement('span');

    sparate.style.padding = "10px";

    if (txt.value == "") {
        warn.innerHTML =  "Please type your task.";
        return false;
    } else {
        warn.innerHTML = "";
        done.setAttribute('type', 'checkbox');
        done.addEventListener('input', () => {
            announce.className = "announce";
            announce.innerHTML = " Done!";
            task.style.textDecoration = "line-through";
        });

        txt.value = txt.value.toUpperCase() + " ";

        task.className = "task";
        task.innerHTML = txt.value;

        txt.value = "";

        addTask.appendChild(sparate);
        addTask.appendChild(task);
        addTask.appendChild(done);
        addTask.appendChild(announce);    
    }
    return true;
}
txt.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        addTasks();
    }
});
