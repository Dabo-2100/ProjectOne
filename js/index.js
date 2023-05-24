setInterval(function () {
  let URL = $("body").css("background-image");
  let ImgNo = URL.split(".png")[0].split("photos/")[1].split("_")[1];
  if (ImgNo == 1) {
    $("body").css("background-image", "url('css/photos/bg_2.png')");
  } else if (ImgNo == 2) {
    $("body").css("background-image", "url('css/photos/bg_1.png')");
  }
}, 5000);

// $(".Card").on("mouseenter", function () {
//   $(".CardContent", this).show(300);
// });

// $(".Card").on("mouseleave", function () {
//   $(".CardContent", this).hide(300);
// });
