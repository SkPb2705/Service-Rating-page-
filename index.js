var btnText;
var leftBtnID;
var clickedBtnValue = "";
var clickFlag = false;

//  event listner to this rating number on hover gesture
$(".rating_num").hover(mouseIn, mouseOut);

function mouseIn() {
  btnText = Number(this.innerHTML);
  leftBtnID = "#rating_" + (btnText - 1);

  if (!clickFlag) {
    $(this).addClass("orangeBtn");
    if (leftBtnID != "#rating_0") {
      $(leftBtnID).addClass("greyBtn");

    }
  }
}

function mouseOut() {
  if (!clickFlag) {
    $(this).removeClass("orangeBtn");
  }
  $("#rating_" + (btnText - 1)).removeClass("greyBtn");
}

//  event listner to  rating number on click gesture
$(".rating_num").click(clickSelector);

function clickSelector() {
  clickFlag = true;

  if (clickedBtnValue == $(this).html()) {
    $(this).toggleClass("orangeBtn");
  } else {
    $(this).addClass("orangeBtn");
    $("#rating_" + clickedBtnValue).removeClass("orangeBtn");
  }
  clickedBtnValue = this.innerHTML;
}

// event listner to rating number on hover gesture .

$(".btn_1").hover(submitIn, submitOut);

function submitIn() {
  $(".btn_1").removeClass("submit_text");
  $(".btn_1").addClass("submitOnHover");

}

function submitOut() {
  $(".btn_1").removeClass("submitOnHover");
  $(".btn_1").addClass("submit_text");

}

// //  event listner to submit button on click
$(".btn_1").click(submitSuccess);

function submitSuccess() {
  if (clickedBtnValue > 0) {
    $(".before-submit").addClass("before-submit-noshow");
    $(".after-submit").addClass("after-submit-show");
  }
  if (clickedBtnValue != 0) {
    $(".rating-scale").html("You selected " + clickedBtnValue + "out of 5");
  } else {
    alert("Please select rating first");
  }

}
