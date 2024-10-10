



// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("logo_tab").style.margin = "0px";
    document.getElementById("logo_mob").style.margin = "0px";
  } else {
    document.getElementById("logo_tab").style.margin = "20px";
    document.getElementById("logo_mob").style.margin = "8px";
  }
}













