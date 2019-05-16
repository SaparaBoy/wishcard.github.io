var txtbox = document.getElementById("txtbox");
var btn = document.getElementById("wish");
var card = document.getElementById("card");
var txt = document.getElementsByClassName("txt");
$(function() {
  $("#wish").change(function(e) {
    if (this.checked) {
      txtbox.style.height = "30%";
      card.style.backgroundSize = "100%";
      $("p").fadeOut(300);
      $(".logo").css("top", "0%");
      $("h2").fadeIn(1000);
      $("h2").css("margin-top", "65px");
    } else {
      txtbox.style.height = "102%";
      card.style.backgroundSize = "200%";
      $("p").fadeIn(800);
      $("h2").css("margin-top", "120px");
      $(".logo").css("top", "11%");
      $("h2").css("transition", ".3s");
    }
  });
});
