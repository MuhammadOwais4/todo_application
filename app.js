var myname = document.getElementById("name");
var todo = document.getElementById("todo");

sendData = function (delBtn) {
  var obj = {
    name: myname.value,
    task: todo.value,
    dateTime: JSON.stringify(new Date()),
  };
  var randomkey = Math.random().toString();
  obj.id = randomkey.slice(2)
  console.log(obj.id)

  console.log(obj);
}

deleteText = function () {
  myname.value = '';
  todo.value = '';
}