const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");

const minCircle = 1;
const maxCircle = circles.length;

const RefreshCircles = () => {
  circles.forEach((circle) => {
    if (circle.classList.contains("active") === true) {
      circle.classList.remove("active");
    }
  });
};

const manageDisable = () => {
  let tempHighlightNum = getHighlightedNum();

  if (tempHighlightNum === 1) {
    changeDisable(false, true);
  } else if (tempHighlightNum === 4) {
    changeDisable(true, false);
  } else {
    changeDisable(false, false);
  }
};

const changeDisable = (bNext, bPrev) => {
  next.disabled = bNext;
  prev.disabled = bPrev;
};

const getHighlightedNum = () => {
  let highLightNum = 0;
  circles.forEach((circle) => {
    if (circle.classList.contains("active") === true) {
      highLightNum = parseInt(circle.textContent);
    }
  });
  return highLightNum;
};

const updateProgressBar = () => {
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

next.addEventListener("click", () => {
  let highLightNum = getHighlightedNum();
  //   RefreshCircles();
  circles.forEach((circle) => {
    if ((highLightNum + 1).toString() === circle.textContent) {
      circle.classList.add("active");
    }
  });
  manageDisable();
  updateProgressBar();
});

prev.addEventListener("click", () => {
  let highLightNum = getHighlightedNum();
  //   RefreshCircles();
  circles.forEach((circle) => {
    if (highLightNum.toString() === circle.textContent) {
      circle.classList.remove("active");
    }
  });
  manageDisable();
  updateProgressBar();
});
