const btn = document.querySelectorAll(".card-more-btn");
const close = document.querySelectorAll(".card-close");

window.onload = init;

function init() {
  forLoop(btn, flipCard);
  forLoop(close, closeCard);
}

function forLoop(e, func) {
  e.forEach(element => {
    element.addEventListener("click", e => {
      let card = e.target.parentElement.parentElement.parentElement;
      let button = element;
      button.style.pointerEvents = "none";
      func(card, button);
    });
  });
}

function closeCard(card, button) {
  card.parentElement.classList.remove("flipped");
  let front = card.previousSibling.previousSibling;
  fadeIn(card, front, button);
}

function flipCard(card, button) {
  let back = card.nextSibling.nextSibling;
  card.parentElement.classList.toggle("flipped");
  fadeIn(card, back, button);
}

function fadeIn(card, side, button) {
  setTimeout(() => {
    card.style.opacity = 0;
    card.style.visibility = "hidden";
    side.style.display = "flex";
    card.style.display = "none";
    setTimeout(() => {
      side.style.visibility = "visible";
      side.style.opacity = 1;
      button.style.pointerEvents = "unset";
    }, 100);
  }, 200);
}
