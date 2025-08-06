let todo_list = [];
const user_todo = {};

function create_todo() {
  let todo_str = prompt("what to add?: ");
  todo_list.push(todo_str);
  console.log(todo_list);
  return;
}

function update_todo(todo_arr) {
  prompt("what to update?: ");
}
