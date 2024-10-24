



// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("logo_tab").style.margin = "0px";
    document.getElementById("logo_mob").style.margin = "0px";
    document.getElementById("logo_mob").style.maxHeight = "56px";
    document.getElementById("logo_img").style.maxHeight = "56px";
    document.getElementById("logo_img").style.width = "auto";
  } else {
    document.getElementById("logo_tab").style.margin = "20px";
    document.getElementById("logo_mob").style.margin = "8px";
    document.getElementById("logo_mob").style.maxHeight = "80px";
    document.getElementById("logo_img").style.maxHeight = "80px";
    document.getElementById("logo_img").style.width = "100%";
  }
}













