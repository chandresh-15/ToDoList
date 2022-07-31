var taskele = document.querySelector("#task-input-text");
var taskdata = document.querySelector(".task-box");
var count = 0;
let sign = true;
function addtask() {
  if (taskele.value == "") {
    alert("pleasr enter your task");
  } else {
    console.log(taskele.value);
    count++;
    var newul = `<li class="task" id="${count}"><input id="ontick" type="CheckBox" onclick="checkit(${count})">${taskele.value}<button class="delfunction" type="button" onclick="deleteTask(${count})"><i class="uil uil-trash"></i>delete</button></li><br>`;
    taskdata.innerHTML += newul;
    taskele.value = "";
  }
}
function deleteTask(taskid) {
  var state = confirm("Are you sure want to delete this product ? ");
  if (state) document.getElementById(taskid).remove();
}

function checkit(taskid) {
  if (sign == true) {
    document.getElementById(taskid).style.textDecoration = "line-through";
    document.getElementById(taskid).style.backgroundColor = "green";
    sign = !sign;
  } else {
    document.getElementById(taskid).style.textDecoration = "";
    document.getElementById(taskid).style.backgroundColor = "";
    sign = !sign;
  }
}
