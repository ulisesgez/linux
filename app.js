$(document).ready(function() {
    $("pre").click(function() {
      var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val($(this).find("code").text()).select();
      document.execCommand("copy");
      $temp.remove();
  
      $(this).addClass("code-copied");
      var $pre = $(this);
      setTimeout(function() {
        $pre.removeClass("code-copied");
      }, 1500);
    });
});