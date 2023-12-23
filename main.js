let input = document.getElementById('input');
let submit = document.getElementById('submit');
let todo = document.getElementById('todo');

let value = '';

input.addEventListener('input', function (r) {
  value = r.target.value;
});

submit.addEventListener('click', function (r) {
  let t = document.createElement('div');
  t.classList.add('todo_list');
  t.innerHTML = value;

  let b = document.createElement('buton');
  b.addEventListener('click', function (r) {
    t.remove();
  });
  b.innerHTML = 'HAPUS';
  b.classList.add('delet');

  t.append(b);
  todo.appendChild(t);
});
