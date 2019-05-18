"use strict";
const browserMinWidth = window.matchMedia("(min-width: 1024px)");
const browserMaxWidth = window.matchMedia("(max-width: 1024px)");

function handleMenuClick() {
  $("#menu").on("click", function() {
    $("#menu").toggleClass("change");
    $("#nav-link-container").slideToggle("change");
  });
}

function checkMenuToggleState(browserMaxWidth) {
  if (browserMaxWidth.matches) {
    $("#menu").removeClass("change");
    $("#nav-link-container").slideUp("change");
  }
}

function renderSideNavLinks(minWidth) {
  if (minWidth.matches) {
    $("#side-nav-links").html(
      `<ul id="nav-list" role="navigation" aria-label="main navigation"><li><a href="index.html">HOME</a></li><li><a href="about.html">ABOUT</i></a></li><li><a href="work.html">WORK</a></li><li><a href="contact.html">
          CONTACT</a></li></ul>`
    );
  } else {
    $("#side-nav-links").html(``);
  }
}

function displayLabelForIcons() {
  $(".fa-github").hover(
    function() {
      $("#github-label").css("visibility", "visible");
    },
    function() {
      $("#github-label").css("visibility", "hidden");
    }
  );

  $(".fa-linkedin").hover(
    function() {
      $("#linkedin-label").css("visibility", "visible");
    },
    function() {
      $("#linkedin-label").css("visibility", "hidden");
    }
  );

  $(".fa-envelope-square").hover(
    function() {
      $("#email-label").css("visibility", "visible");
    },
    function() {
      $("#email-label").css("visibility", "hidden");
    }
  );
}

$(function() {
  handleMenuClick();
  renderSideNavLinks(browserMinWidth);
  checkMenuToggleState(browserMaxWidth);
  browserMinWidth.addListener(renderSideNavLinks);
  browserMaxWidth.addListener(checkMenuToggleState);
  displayLabelForIcons();
});
