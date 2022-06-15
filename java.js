var open = document.getElementById('open');
var start = document.getElementById('start');
window.onload = function()
{
   setTimeout(function(){
    open.classList.add('intro');
   },2000);
   setTimeout(function(){
    start.classList.add('start');
   },4000);
  

};


