const inputAdd = document.getElementById('todoInput');
const buttonAdd = document.getElementById('buttonAdd');
const buttonRemove = document.getElementsByClassName('todoRemove');

buttonAdd.addEventListener('click', function (event) {
  event.preventDefault();
  addTask();
});

document.addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    const btn = document.getElementById('buttonAdd');
    btn.click();
  }
});

function addTask() {
  const todoInput = document.getElementById('todoInput');
  if (todoInput.value == '') {
    alert('Você precisa digitar uma tarefa');
  } else {
    criaTodo(todoInput.value);
  }
  todoInput.value = '';
}

function criaTodo(todoData) {
  var todoEachP = document.createElement('p');
  todoEachP.textContent = todoData;
  todoEachP.style.backgroundColor = 'rgb(77, 184, 204)';
  var todoRemove = document.createElement('div');
  todoRemove.textContent = 'X';
  todoRemove.classList.add('todoRemove');

  todoRemove.addEventListener('click', function (event) {
    event.currentTarget.parentElement.remove();
  });

  var todoEach = document.createElement('div');
  todoEach.classList.add('todoEach');

  todoEach.appendChild(todoEachP);
  todoEach.appendChild(todoRemove);

  todoEachP.addEventListener('click', function (e) {
    e.preventDefault();
    if (todoEachP.style.backgroundColor === 'rgb(77, 184, 204)') {
      todoEachP.style.backgroundColor = '#4ABA63';
      todoEachP.style.color = '#205E2E';
    } else {
      todoEachP.style.backgroundColor = 'rgb(77, 184, 204)';
    }
  });

  var todoList = document.getElementById('todoList');
  todoList.appendChild(todoEach);
}
