var quizMode = false;
var a = 1;
$(document).ready(function() {

  if (quizMode) {
    $(".learn").hide();
    $(".quiz").show();
  } else {
    $(".learn").show();
    $(".quiz").hide();
  }

  $(".clickME").click(function() {
    if (quizMode == true) {
      quizMode = false;
      $(".learn").show();
      $(".quiz").hide();
    } else if (quizMode == false) {
      quizMode = true;
      $(".learn").hide();
      $(".quiz").show();
    }
  });

//everyones quiz page

	$(".Q").click(function(){
		$("#A" + a).slideDown();
		a++;
	});
});
