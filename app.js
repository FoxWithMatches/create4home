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

//animation

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element_show');
      } else {
        change.target.classList.remove('element_show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element_animation');

  for (let elm of elements) {
    observer.observe(elm);
  }

  //Accordion

  // document.querySelectorAll('.services_item').forEach((el) => {
  //   el.addEventListener('click', () => {

  //     let content = el.nextElementSibling;
 
  //     if (content.style.maxHeight) {
  //       document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
  //     } else {
  //       document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
  //       content.style.maxHeight = content.scrollHeight + 'px'
  //       addClass
  //     }
    
  //   })
  // });

  const boxes = Array.from(document.querySelectorAll(".services_item")); 

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault(); 
  let currentBox = e.target.closest(".services_item");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; 
  } else {
    currentContent.style.maxHeight = 0;
  }
}
  
})