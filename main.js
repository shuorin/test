/** ACCORDEON **/
$(document).ready(function() {
      $('.dropdown-block .inner-dropdown-block').on('click', f_acc);
  });
   
  function f_acc(){
    $('.dropdown-block .hidden-dropdown-block').not($(this).next()).slideUp(1000);
      $(this).next().slideToggle(1000);
  }

