document.addEventListener("DOMContentLoaded", function () {
    const browserWidth = window.innerWidth;
  
    if (browserWidth < 950) {
      let banner = document.getElementById("banner");
      if (banner) {
        banner.src = "resources/bannersmall.png";
        banner.height = 500 / 2;
        banner.width = 500 / 2;

      } else {
        console.log("Did you mess with the page??")
      }
    }
  });


  //500 x 500
  