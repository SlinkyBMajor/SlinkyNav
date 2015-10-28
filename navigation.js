$(document).ready(function{


  //Bind navItems clicks using deligate
  $('.navItem').on("click", function(){

    $('.navItem').toggleClass('navItem-active');

  });


});
