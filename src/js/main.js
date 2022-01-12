// Кнопка копирования текста
$('.copy__btn').click(function () {
  var $text_copy = $(this).parent().find('.copy__title');
  var $copy_message = $(this).parent().find('.copy__message');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($text_copy.text()).select();
  document.execCommand("copy");
  $temp.remove();
  $copy_message.fadeIn(400);
  setTimeout(function () {
    $copy_message.fadeOut(400);
  }, 3000);
});


// Переключение по табам
$("ul.tabs__filters").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.tabs")
    .find("div.tab")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});


// Переключение по табам с помощью плагина(mixitup)
var mixer = mixitup('.tabs-mix__inner', {
  load: {
    filter: '.tab1'
  },
  // Убрать анимацию
  // animation: {
  //     enable: false
  // }
});


// Hamburger1
$('.hamburger1').click(function () {
  $('.header1').toggleClass('mobile');
});


// Hamburger2
$('.hamburger2').on('click', function () {
  $('.header2').toggleClass('mobile');
})


// Hamburger3
$('.hamburger3').on('click', function () {
  $('.header3').toggleClass('mobile')
})


// Аккордион1
$('.faq').find('.faq__item-title').click(function () {
  $('.faq__item').removeClass('active');
  $(this).next().slideDown('fast');
  $('.faq__item-text').not($(this).next()).slideUp('slow');
  $(this).parent().addClass('active');
});


// Аккордион2
$('.faq2').find('.faq__item-title').click(function () {
  $(this).next().slideToggle('fast');
  $(this).find('.faq__item-text').slideToggle('slow');
  $(this).parent().toggleClass('active');
});


// Scroll к Якорям
$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


// Scroll к блоку
$('.scroll-btn').click(function () {
  $('html,body').animate({ scrollTop: $('#accordion1').offset().top + "px" }, { duration: 0.5E3 });
});


// Кнопка поднятия на вверх
document.addEventListener("DOMContentLoaded", function () {
  let gototop = document.querySelector(".ufive_uptop");
  let body = document.documentElement;

  window.addEventListener("scroll", check);

  function check() {
    pageYOffset >= 500 && gototop.classList.add("ufive_upview");
    pageYOffset < 500 && gototop.classList.remove("ufive_upview");
  }

  gototop.onclick = function () {
    animate({
      duration: 700,
      timing: gogototopEaseOut,
      draw: (progress) => (body.scrollTop = body.scrollTop * (1 - progress / 7))
    });
  };

  let circ = (timeFraction) =>
    1 -
    Math.sin(Math.acos(timeFraction > 1 ? (timeFraction = 1) : timeFraction));

  let makeEaseOut = (timing) => (timeFraction) => 1 - timing(1 - timeFraction);
  let gogototopEaseOut = makeEaseOut(circ);
});
function animate(options) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / options.duration;
    timeFraction > 1 && (timeFraction = 1);

    let progress = options.timing(timeFraction);

    options.draw(progress);
    timeFraction < 1 && requestAnimationFrame(animate);
  });
}


// Мощный select (semantic-ui)
$('.select2').dropdown();


//Аналог FancyBox (Magnific-Popup)
$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
});
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
  type: 'iframe',
  removalDelay: 160,
  preloader: false,
});


// Input[number] без стрелок и нельзя написать букву e
var inputBox = document.querySelector("input[type=number]");

var invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


// Маска для input'a кредитная карточка
$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
$('#input-card').click(function () {
  $(this).setCursorPosition(0);
}).mask("9999 9999 9999 9999", { "placeholder": "" });
$('#input-card').mask("9999 9999 9999 9999", { "placeholder": "" });

$('#input-phone').click(function () {
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$('#input-phone').mask("+7(999) 999-9999");


// Датапикер (Air-DatePicker)
let startDate = new Date('2021-07-20');
new AirDatepicker('#el', {
  startDate,
  range: true,
  multipleDates: true,
  multipleDatesSeparator: " - "
})
new AirDatepicker('#el2', {
  startDate,
})


// Проверка валидации 
$(document).ready(function () {
  $('#contacts__form').submit(function (e) {
    e.preventDefault();
    var message = $('#contacts__form-message').val();
    var email = $('#contacts__form-email').val();

    $(".error").remove();
    $(".input").removeClass('input-error');

    if (message.length < 1) {
      $('#contacts__form-message').addClass('input-error');
      $('#contacts__form-message').after('<span class="error">Заполните поле</span>');
    }
    if (email.length < 1) {
      $('#contacts__form-email').addClass('input-error');
      $('#contacts__form-email').after('<span class="error">Заполните поле</span>');
    } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#contacts__form-email').addClass('input-error');
        $('#contacts__form-email').after('<span class="error">Заполните правильно</span>');
      }
    }
  });
});


// Отправка на почту
$(document).ready(function () {
  $(".form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      th.parent().removeClass('active');
      th.parent().parent().find('.modal-block--finished').addClass('active');
      $('html').addClass('hidden');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});