$(document).ready(function(){


/*================================================

                    MODEL

==================================================*/




/*=================================================

                    VIEW

===================================================*/

/*                   SELECTORS
------------------------------------------------------*/

//window
var windowWidth = window.innerWidth;
var $window = $(window);

// tabs/pills
var aboutUs_link = $('.about-us__link');
var ourServices_link = $('.our-services__link');
var ourDentists_link = $('.our-dentists__link');
var contactUs_link = $('.contact-us__link');

// sections
var aboutUS_section = $('#about-us');
var ourServices_section = $('#our-services');
var ourDentists_section = $('#our-dentists');
var contactUs_section = $('#contact-us');

// dropdown
var $dropdownBtn = $('.dropdown-btn');
var $dropdownMenu = $('#header__dropdown');

/*                    EVENTS
------------------------------------------------------*/

$window.on('resize', function(event){         
    windowWidth = window.innerWidth;
    toggleEl(windowWidth, '#header__dropdown');
});

$dropdownBtn.on({
    'click': function(){
        toggleDropdown(this, $('#header__dropdown'));
    }
})

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

/*                    FUNCTIONS
------------------------------------------------------*/

function scrollTo_el(selector){
    $('html, body').stop().animate({
        scrollTop: selector.offset().top
    }, 1000);
}
});

function toggleDropdown(that, selector){
        $(that).find('span').toggleClass('icon-delete-1');
        $(selector).slideToggle('fast');
}

function toggleEl(width, selector){
    if(width >= 768){
        $(selector).hide();
    } else {
        //$(selector).show();
    }
}

/*                    FUNCTION CALLS
------------------------------------------------------*/

$('#header__dropdown').hide();
