$(document).ready(function(){


/*================================================

                    MODEL

==================================================*/




/*=================================================

                    VIEW

===================================================*/

/* Selectors
-------------------------*/

var aboutUs_link = $('.about-us__link');
var ourServices_link = $('.our-services__link');
var ourDentists_link = $('.our-dentists__link');
var contactUs_link = $('.contact-us__link');


var aboutUS_section = $('#about-us');
var ourServices_section = $('#our-services');
var ourDentists_section = $('#our-dentists');
var contactUs_section = $('#contact-us');

/* Events
--------------------------*/

aboutUs_link.on({
    'click': function(event){
        event.preventDefault();
        scrollTo_el(aboutUS_section);
    }
});

ourServices_link.on({
    'click': function(event){
        event.preventDefault();
        scrollTo_el(ourServices_section);
    }
});

ourDentists_link.on({
    'click': function(event){
        event.preventDefault();
        scrollTo_el(ourDentists_section);
    }
});

contactUs_link.on({
    'click': function(event){
        event.preventDefault();
        scrollTo_el(contactUs_section);
    }
});

/*===================================================

                    CONTROLLER

======================================================*/

function scrollTo_el(selector){
    $('html, body').stop().animate({
        scrollTop: selector.offset().top
    }, 1000);
}
});