var open = document.getElementById('open');
var start = document.getElementById('start');
var test = document.getElementById('1');
var test2 = document.getElementById('2');
window.onload = function()
{
   setTimeout(function(){
    open.classList.add('intro');
   },2000);
   setTimeout(function(){
    start.classList.add('start');
   },4000);
   setTimeout(function(){
    test.classList.add('start');
   },4000);setTimeout(function(){
    test2.classList.add('start');
   },4000);
  

};


