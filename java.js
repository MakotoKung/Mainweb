var open = document.getElementById('open');
var start = document.getElementById('start');
var test = document.getElementById('1');
var test2 = document.getElementById('2');
var test3 = document.getElementById('3');
var test4 = document.getElementById('4');
var button = document.getElementById('button');

window.onload = function()
{
   setTimeout(function(){
    open.classList.add('intro');
   },2000);
   setTimeout(function(){
    start.classList.add('start');
   },4000);
   setTimeout(function(){
    start.classList.remove('op0');
   },4000);
   setTimeout(function(){
    test2.classList.add('start');
   },4000);
   setTimeout(function(){
    test3.classList.add('start');
   },4000); setTimeout(function(){
    test4.classList.add('start');
   },4000);
   setTimeout(function(){
      button.classList.add('bt-z')
   },4000);
  

};


