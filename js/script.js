
// Global variables
var str = "Hello World! 👾 ";
var name = "Yuridia Larios";

$(".banner-jobTitle").hide();

// FUNCTION: Typewriting effect
function typeWritingEffect(text) {
  var index = 0;
  typeWriter = setInterval(function() {
    document.querySelector("h1").textContent += text[index];
    index += 1;
    if (index > text.length - 1) {
      clearInterval(typeWriter);
    }
  }, 250);
}

// MAIN PROGRAM:
  typeWritingEffect(str);
  $("h1").delay(5000).fadeOut("slow").empty();

  setTimeout(function() {
    $(".fly-in-text").removeClass("yellow");
    $("h3").delay(3000).show(0);
  }, 5700);



var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
