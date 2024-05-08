const prizes = [
  { id: 0, msg: "CB BOOK" },
  { id: 1, msg: "CB TSHIRT" },
  { id: 2, msg: "2 EXTRA SPINS" },
  { id: 3, msg: "AMAZON VOUCHER" },
  { id: 4, msg: "50% OFF" },
  { id: 5, msg: "NETFLIX SUBS" },
  { id: 6, msg: "100% OFF" },
  { id: 7, msg: "CB SWAGPACK" },
  { id: 8, msg: "70% OFF" },
  { id: 9, msg: "HARD LUCK" },
  { id: 10, msg: "35% OFF" },
  { id: 11, msg: "3000 CB CREDITS" },
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum = Math.floor(Math.random() * 12);
  return prizeNum;
}

function removeClass() {
  var prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");
  document.getElementById("spinner").style.transform =
    "rotate(" + prize * 30 + "deg)";

  // Show pop-up content in the middle of the page
  $(".pop-up-content").fadeIn().css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  });

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    activeBtn = false;
    $(".pop-up-content").fadeOut(); // Hide pop-up content
  }, 2000);

  var prizeText = prizes[prize].msg;
  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
}

function spin() {
  if (!activeBtn) {
    activeBtn = true;
    audio.play();

    document.getElementById("spinner").classList.add("spin");
    document.getElementById("spin-btn").disabled = true;

    setTimeout(removeClass, 5000);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === " " && !activeBtn) {
    spin();
  }
});
