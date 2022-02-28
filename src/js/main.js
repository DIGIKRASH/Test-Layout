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
  $('.main-content').toggleClass('transform')
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
$('.image-magnific').magnificPopup({
  type: 'image',
});
$('.gallery-magnific').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
  },
  image: {
    titleSrc: function (item) {
      return item.el.find('.gallery__item-place').html() + `<small>${item.el.find('.gallery__item-name').html()}</small>`;
    },
  }
});
$('.video-youtube').magnificPopup({
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


// Фиксированный сайдбар 
jQuery('.content, .sidebar').theiaStickySidebar({
  additionalMarginTop: 30
});


// Модольное окно 1
$('.modal1-window__btn').click(function () {
  $('.modal1').toggleClass('active');
  $('body').toggleClass('modal');
});
$('.modal1__btn').click(function () {
  $(this).parent().removeClass('active');
  $('body').removeClass('modal');
});
// Убираем модальное окно при клике на другую область
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.modal1'); // тут указываем класс элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.modal1').removeClass('active');
    $('body').removeClass('modal');
  }
});


// Модольное окно 2
$('.modal2-window__btn').click(function () {
  $('.modal2').toggleClass('active');
});
$('.modal2__btn').click(function () {
  $(this).parent().removeClass('active');
});
// Убираем модальное окно при клике на другую область
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.modal2, .modal2-window__btn'); // тут указываем класс элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.modal2').removeClass('active');
  }
});


// Swiper-Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  // direction: "vertical",
  // effect: "fade",
  autoplay: {
    enabled: false,
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // Autoplay при адаптиве
    // 0: {
    //   autoplay: {
    //     enabled: true,
    //     delay: 100,
    //   },
    // },
    // 640: {
    //   autoplay: {
    //     enabled: false,

    //   },
    // },
  }
});
// Запуск Аutoplay только когда пользователь вошел в область видимости
$(window).scroll(function () {
  $('.ways').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top && $(window).scrollTop() < $(this).position().top + $(this).height()) {
      swiper_ways.autoplay.start();
    }
  });
});


// Анимация при скролле WOW
wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 100,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();

// Кнопка очистки input'a
$('#clear__form-btn').click(function (e) {
  e.preventDefault();
  $('#clear__form-input').val('');
});


// Раскрыть текст по нажатию кнопки
$('.open_text-1 button').click(function () {
  $('.open_text-1').toggleClass('open');
});
$('.open_text-2 button').click(function () {
  $('.open_text-2').toggleClass('open');
});



// --- Эффект-3D "Vanilla-Tilt"
let destroyBox = document.querySelector(".vanilla");
VanillaTilt.init(destroyBox, {
  max: 15,
  speed: 1000,
  scale: 1.05,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
});
if (window.innerWidth < 700) {
  destroyBox.vanillaTilt.destroy();
}


// --- Custom Cursor
var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  //     updateCursor: function(e) {
  //         var self = this;

  //         console.log(e)

  //         // Show the cursor
  //         self.cursorVisible = true;
  //         self.toggleCursorVisibility();

  //         // Position the dot
  //         self.endX = e.pageX;
  //         self.endY = e.pageY;
  //         self.$dot.style.top = self.endY + 'px';
  //         self.$dot.style.left = self.endX + 'px';
  //     },

  setupEventListeners: function () {
    var self = this;

    // Anchor hovering
    document.querySelectorAll('a').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener('mousedown', function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });


    document.addEventListener('mousemove', function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });

    // Hide/show cursor
    document.addEventListener('mouseenter', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener('mouseleave', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  }
}
cursor.init();
// При наведении на input, скрывать cursor
$('input').on('mouseover', function () {
  $('.cursor-dot-outline').css('background-color', 'transparent');
})
$('input').on('mouseout', function () {
  $('.cursor-dot-outline').css('background-color', 'rgba(28,28,28,.5)');
})