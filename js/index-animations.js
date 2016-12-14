/* Animation file for the carousel inside index.html and also the
 * shake animations for the icons inside index.html
 */
$(document).ready(function(){
   carousel();   
});

function carousel() {
   
   // initializing the required variables...
   var box = document.querySelector('.carousel-box');
   var next = box.querySelector('.next');
   var prev = box.querySelector('.prev');
   var items = box.querySelectorAll('.carousel-content li');
   
   var counter = 0
   var amount = items.length;
   var current = items[0];
   
   var timer;

   // activating the carousel
   box.classList.add('active');
   
   /* This is the main loop of the carousel which is is basically always
    * rolling within itself over and over again thanks to the timeout
    * function to redo the function.
    */
   function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      
      // making sure the value of the counter never goes outside of the
      // array of images inside the carousel-content list.
      // current
      if (direction === -1 && counter < 0) { 
         counter = amount - 1; // Last element.

      }
      if (direction === 1 && !items[counter]) { 
         counter = 0; // First element.
      }

      current = items[counter];
      current.classList.add('current');
      
      // this redos the whole function over and over again to infinity.
      timer = setTimeout(function() {
         navigate(1);
      },5000);
   }
   next.addEventListener('click', function(event) {
      clearTimeout(timer);
      navigate(1);
   });
   prev.addEventListener('click', function(event) {
      clearTimeout(timer);
      navigate(-1);
   });
   navigate(0);
};

function shake(well) {
   icon = well.querySelector('.shake-img');

   if (! icon.classList.contains('animate')){
      icon.classList.add('animate');

      setTimeout(function() {
         icon.classList.remove('animate'); 
      },380);
   }
};
