// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');
// button.addEventListener('click', function(){
//   modal.classList.add('modal_active');
// });
// function time (time) {
//     modal.classList.remove('modal_active');
//   }
//   setTimeout(time, 5000);
// close.addEventListener('click', function(){
//   modal.classList.remove('modal_active');
// });



// Чистый js

var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.onclick = function() {
if (!modal.classList.contains('modal_active')) {
modal.classList.add('#modal_active');
}
setTimeout(closeWin, 5000);
};

var closeWin = function() {
modal.classList.remove('modal_active');
};

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});