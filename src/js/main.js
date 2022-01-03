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


//Hamburger1
$('.hamburger').click(function () {
  $('.header1').toggleClass('mobile');
});








// // Маска для input'a кредитная карточка
// $.fn.setCursorPosition = function (pos) {
//   if ($(this).get(0).setSelectionRange) {
//     $(this).get(0).setSelectionRange(pos, pos);
//   } else if ($(this).get(0).createTextRange) {
//     var range = $(this).get(0).createTextRange();
//     range.collapse(true);
//     range.moveEnd('character', pos);
//     range.moveStart('character', pos);
//     range.select();
//   }
// };
// $('.input-creditCard').click(function () {
//   $(this).setCursorPosition(0);
// }).mask("9999999999999999", { "placeholder": "" });
// $('.input-creditCard').mask("9999999999999999", { "placeholder": "" });





// //Кнопка поднятия на вверх
// document.addEventListener("DOMContentLoaded", function () {
//   let gototop = document.querySelector(".ufive_uptop");
//   let body = document.documentElement;

//   window.addEventListener("scroll", check);

//   function check() {
//     pageYOffset >= 500 && gototop.classList.add("ufive_upview");
//     pageYOffset < 500 && gototop.classList.remove("ufive_upview");
//   }

//   gototop.onclick = function () {
//     animate({
//       duration: 700,
//       timing: gogototopEaseOut,
//       draw: (progress) => (body.scrollTop = body.scrollTop * (1 - progress / 7))
//     });
//   };

//   let circ = (timeFraction) =>
//     1 -
//     Math.sin(Math.acos(timeFraction > 1 ? (timeFraction = 1) : timeFraction));

//   let makeEaseOut = (timing) => (timeFraction) => 1 - timing(1 - timeFraction);
//   let gogototopEaseOut = makeEaseOut(circ);
// });

// function animate(options) {
//   let start = performance.now();

//   requestAnimationFrame(function animate(time) {
//     let timeFraction = (time - start) / options.duration;
//     timeFraction > 1 && (timeFraction = 1);

//     let progress = options.timing(timeFraction);

//     options.draw(progress);
//     timeFraction < 1 && requestAnimationFrame(animate);
//   });
// }