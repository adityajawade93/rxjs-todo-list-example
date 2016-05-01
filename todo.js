const _input = $('.input');
const _todos = $('.todos');

const keyup$ = Rx.Observable.fromEvent(_input, 'keyup');

const todoItem$ = keyup$
  .filter(ev => ev.keyCode === 13)
  .map(ev => ev.target.value)
  .filter(msg => msg.trim().length);

todoItem$.subscribe(data => {
  $(`<li>${data}</li>`).appendTo(_todos);
  $('.input').val(''); //change it
});
