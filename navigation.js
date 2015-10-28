$(document).ready(function{


  //Check so that a holder for the navigation exists
  if ( $( '.slinkyNav' ).length ) {

    //Load the html into the DOM of index *Just test*
    $( '.slinkyNav' ).('navBar.html');

    //Bind navItems clicks using deligate
    $('.navItem').on("click", function(event){

      clickedElement = $(event.target);
      $('.navItem:has(.navItem-active)').toggleClass('navItem-active');
      $(clickedElement).find('.navItem').toggleClass('navItem-active');

    });

  }
  //Else if there is no dom element with class slinkyNav
  else {
    alert('No DOM element with the class slinkyNav found.');
  }

});
