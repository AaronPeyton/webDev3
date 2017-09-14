$(document).ready(function() {

  $('.switch-input').on('change', function() {
    var isChecked = $(this).is(':checked');
    var selectedData;
    var $switchLabel = $('.switch-label');
    if (isChecked) {
      $("#learn").hide();
      $("#quiz").show();
    } else {
      $("#quiz").hide();
      $("#learn").show();
    }
  });
});
