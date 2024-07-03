$(function() {

    //Header

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);
    checkScrolls(scrollPos, introH);

$(window).on("scroll load resize", function() {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();

  checkScroll(scrollPos, introH);
  checkScrolls(scrollPos, introH);
  
});

function checkScroll(scrollPos, introH) {
  if(scrollPos > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementID = $(this).data('scroll');
  let elementOffset = $(elementID).offset().top;
  
  console.log(elementOffset);

  $("html, body").animate({
    scrollTop: elementOffset - 70
  }, 700);
});


/* navToggle */

navToggle.on("click", function(event) {
  event.preventDefault();

  nav.toggleClass("show");

});

function checkScrolls(scrollPos, introH) {
  if(scrollPos < introH && navToggle.on("click")) {
    nav.addClass("transparent");
  } else {
    nav.removeClass("transparent");
  }
}

})