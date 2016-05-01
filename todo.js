const _input = $('.input');
const _todos = $('.todos');

const keyup$ = Rx.Observable.fromEvent(_input, 'keyup');

const todos = ['Study RxJS'];

const todoItem$ = keyup$
  .filter(ev => ev.keyCode === 13)
  .map(ev => ev.target.value)
  .filter(msg => msg.trim().length);

const todos$ = Rx.Observable.of(todos)
  .merge(todoItem$)
  .scan((list, item) => [ ... list, item ])

todos$.subscribe(data => {
  _todos.empty();

  data.map(item => $(`<li>${item}</li>`).appendTo(_todos))
  $('.input').val(''); //change it
});
