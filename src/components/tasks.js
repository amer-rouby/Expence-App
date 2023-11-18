let tasksControl = document.getElementById("tasks-control");
let addTask = document.getElementById("add-task");
let tasks = [];

//the saved locale storge
function getTasksFromStorge() {
  let retrivedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (retrivedTasks == null) {
    tasks = [];
  } else {
    tasks = retrivedTasks;
  }
}
getTasksFromStorge();
//the red tasks dinamic
function redTasksDinamic() {
  let content = "";
  let index = 0;
  for (task of tasks) {
    content += `<li class="content-icons ${task.isDone ? "task" : ""}">
                <div class="text-conten">
              <h6> ${task.title}</h6>
              <span>${task.date}</span
              ><span class="material-symbols-outlined"> prescriptions </span>
            </div>
            <div class="icons">
              <span
              name=${index}
              class="material-symbols-outlined edit">
               edit
               </span>
             ${
               task.isDone
                 ? `<span
                 name=${index}
              class="material-symbols-outlined check cancel"> cancel </span>`
                 : `<span
              name=${index}
              class="material-symbols-outlined check done"> done </span>`
             }

             <span name=${index}
              class="material-symbols-outlined delete"> delete
              </span>
            </div>

          </li>`;
    index++;
  }

  tasksControl.innerHTML = content;
  handleEventButtonIcon();
}
redTasksDinamic();
//edit task
function editTask() {
  let task = tasks[this.getAttribute("name")];

  let newTaskTitle = prompt(
    "الرجاء تحديد عنوان المهمه الجديد  " + task.title,
    task.title
  );
  if (newTaskTitle) {
    task.title = newTaskTitle;
    storeTask();
    redTasksDinamic();
  }
}
// delete task
function deleteTask() {
  const index = this.getAttribute("name");
  let isDelete = confirm("هل انت متاكد من حذف العنصر  ");
  if (isDelete) {
    tasks.splice(index, 1);
    storeTask();
    redTasksDinamic();
  }
}

//the add new task
addTask.addEventListener("click", () => {
  let taskName = window.prompt("الرجاء ادخال عنوان المهمه");
  if (taskName) {
    let now = new Date();
    let date =
      now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    tasks.push({
      title: taskName,
      date: date,
      isDone: false,
    });
    storeTask();
    redTasksDinamic();
  }
});

// the cheked completion task
function toggleTaskCompletion() {
  let task = tasks[this.getAttribute("name")];
  task.isDone = !task.isDone;
  storeTask();
  redTasksDinamic();
}

function storeTask() {
  // لتحويل الصفوفه الي نصوص حتي يفهمها ال  localstorage
  let tasksString = JSON.stringify(tasks);
  //لاضافه البيانات داخل ال localStorage
  localStorage.setItem("tasks", tasksString);
}
//handle Event Button Icon
function handleEventButtonIcon() {
  const itemsDelete = document.getElementsByClassName("delete");
  Array.from(itemsDelete).forEach((item) =>
    item.addEventListener("click", deleteTask)
  );

  const itemsEdit = document.getElementsByClassName("edit");
  Array.from(itemsEdit).forEach((item) =>
    item.addEventListener("click", editTask)
  );

  const TaskCompletion = document.getElementsByClassName("check");
  Array.from(TaskCompletion).forEach((item) =>
    item.addEventListener("click", toggleTaskCompletion)
  );
}
