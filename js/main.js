var n = $("nav.navbar");

$(document).ready(function(){
  $(window).scroll(function(){
    //if scroll past a certain point, fixed height
    if($(this).scrollTop() > window.innerHeight){
      n.addClass("navbar-fixed-top");
    } else {
      n.removeClass("navbar-fixed-top");
    }
  });

  $('#comment').submit(function(){
    var values = {};

    //uses serializeArray to populate a JSO of values
    $.each($('#comment').serializeArray(), function(i, field){
      values[field.name] = field.value;
    });

    //sets email messages
    var name = values.name + ' - Sample Email';
    var message = values.message;

    //uses user's own email client to sent email
    window.open('mailto:sample@email.com?subject=' + name + '&body=' + message);
  });

  $('#mainNav a').on('click', function(event){
    //double checks that a valid link was clicked
    if(this.hash !== ""){
      event.preventDefault();

      //saves location in javascript
      var hash = this.hash;

      //scrolls
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        //adds location to URL
        window.location.hash = hash;
      });
    }
  });

  $('#downArrow').on('click', function(){
    //moves to about location
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 500, function(){

      //adds location to URL
      window.location.hash = '#about';
    });
  });

  $('a.navbar-brand').on('click', function(){
    //moves to home location
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 500, function(){

      //adds location to URL
      window.location.hash = '#home';
    });
  });

  $('[data-toggle="tooltip"]').tooltip();
});

