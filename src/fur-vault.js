import $ from 'jquery';

$(document).on('change', '#stateSelect', function () {
  const target = $(this).data('target');
  const show = $('option:selected', this).data('show');
  $(target).children().addClass('fv-store-container');
  $(show).removeClass('fv-store-container');
});
$(document).ready(() => {
  $('#stateSelect').trigger('change');
});

$(document).on('change', '#stateSelectMobile', function () {
  const target = $(this).data('target');
  const show = $('option:selected', this).data('show');
  $(target).children().addClass('fv-store-container');
  $(show).removeClass('fv-store-container');
});
$(document).ready(() => {
  $('#stateSelectMobile').trigger('change');
});

// $('.accordion').click(function () {
//       $('.accordion').removeClass('active');
//       $(this).addClass('active');

//     });

document.addEventListener('DOMContentLoaded', () => {
  const acc = document.getElementsByClassName('accordion');
  const panel = document.getElementsByClassName('panel');

  function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }

  for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      const setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
      }
    };
  }
});

$(document).on('click', '.store-locator', () => {
  $('.fv-store-locator').css('display', 'block');
  $('.fv-pop-links').css('display', 'none');
  $('.fv-shop-now').css('display', 'none');
});
$(document).on('click', '.faq', () => {
  $('.fv-faq').css('display', 'block');
  $('.fv-pop-links').css('display', 'none');
  $('.fv-shop-now').css('display', 'none');
});
$(document).on('click', '.restyling', () => {
  $('.fv-restyling').css('display', 'block');
  $('.fv-pop-links').css('display', 'none');
  $('.fv-shop-now').css('display', 'none');
  $('button.slick-prev').click();
});
$(document).on('click', '.fv-close-btn', () => {
  $('.fv-overlay').css('display', 'none');
  $('.fv-pop-links').css('display', 'block');
  $('.fv-shop-now').css('display', 'block');
});
// $(".store-locator").click(function(){
//     $(".fv-store-locator").css("display", "block");
//     $(".fv-pop-links").css("display", "none");
//     $(".fv-shop-now").css("display", "none");
// });

// $(".faq").click(function(){
//     $(".fv-faq").css("display", "block");
//     $(".fv-pop-links").css("display", "none");
//     $(".fv-shop-now").css("display", "none");
// });

// $(".restyling").click(function(){
//     $(".fv-restyling").css("display", "block");
//     $(".fv-pop-links").css("display", "none");
//     $(".fv-shop-now").css("display", "none");
//     $("button.slick-prev").click();
// });

// $(".fv-close-btn").click(function(){
//     $(".fv-overlay").css("display", "none");
//     $(".fv-pop-links").css("display", "block");
//     $(".fv-shop-now").css("display", "block");
// });

/* Helper functions for sticky nav */
function isScrolledIntoView(elem) {
  let inView;
  if (elem.length !== 0) {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = elem.offset().top;
    const elemBottom = elemTop + elem.height();

    inView = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  return inView;
}

function scrolledOutOfView(elem) {
  let outOfView;
  if (elem.length !== 0) {
    const docViewTop = $(window).scrollTop();
    // const docViewBottom = docViewTop + $(window).height();

    const elemTop = elem.offset().top;
    const elemBottom = elemTop + elem.height();

    outOfView = (elemBottom <= docViewTop);
  }
  return outOfView;
}


$(window).scroll(() => {
  const header = $('.ceg-header-placement');
  const menu = $('.ceg-menu');
  if (scrolledOutOfView(header)) {
    menu.addClass('ceg-fixed-nav');
  } else if (isScrolledIntoView(header)) {
    menu.removeClass('ceg-fixed-nav');
  }
});


export default {
  isScrolledIntoView,
  scrolledOutOfView,
};
