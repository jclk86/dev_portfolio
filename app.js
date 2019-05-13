function handleMenuClick() {
  $("#menu").on("click", function() {
    $("#menu").toggleClass("change");
    $(".nav-link-container").slideToggle("change");
    $("#menu-bg").toggleClass("change-bg");
  });
}

$(function() {
  handleMenuClick();
});
