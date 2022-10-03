$(function () {
  $("h1").hover(function () {
    $("h1").hover(bigger());
  });
});

function bigger() {
  $("h1").toggleClass("size");
}

$(function () {
  $("#header2").click(function () {
    $("#header2").fadeTo("click", 0.2);
  });
  $("#header2").hover(function () {
    $("#header2").fadeTo("mouseleave", 1);
  });
});

function b1() {
  $("p").css("border", "3px solid blue");
}

$("document").ready(function () {
  $("#div2 p:odd").css("background-color", "purple");
});

function b2() {
  $("p").css("border", "none");
}

function animate1() {
  $("#animate11").ready(function () {
    $("#div2").animate(
      {
        left: "+=500",
        fontSize: "35px",
        color: "red",
      },
      3000,
      "swing"
    );
  });
}
function byeButton(){
    $(this).click(function(){
        $("button").slideUp("slow");
    })
}