/*hides when you click it */

function byeButton() {
    $(this).click(function () {
      $("button").slideUp("slow");
    });
    hideP();  
  }