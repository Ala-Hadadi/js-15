/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

const colors = [
  [31, 127, 102, 1],
  [255, 200, 0, 1],
  [255, 123, 0, 1],
  [216, 1, 1, 1],
  [223, 4, 70, 1],
  [127, 31, 85, 1],
];

const first = document.querySelector(".first");
first.style.backgroundColor = "rgba(31, 127, 102, 1)";

const second = document.querySelector(".second");
second.style.backgroundColor = "rgba(255, 200, 0, 1)";

const third = document.querySelector(".third");
third.style.backgroundColor = "rgba(255, 123, 0, 1)";

const fourth = document.querySelector(".fourth");
fourth.style.backgroundColor = "rgba(216, 1, 1, 1)";

const fifth = document.querySelector(".fifth");
fifth.style.backgroundColor = "rgba(223, 4, 70, 1)";

const sixth = document.querySelector(".sixth");
sixth.style.backgroundColor = "rgba(127, 31, 85, 1) ";

const seventh = document.querySelector(".seventh");
seventh.style.backgroundColor = "rgba(93, 18, 199, 1)";

const circles = document.querySelectorAll(".circle");
const rectangles = document.querySelectorAll(".rectangle");

first.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(31, 127, 102, 1)";
  });
});

second.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(255, 200, 0, 1)";
  });
});

third.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(255, 123, 0, 1)";
  });
});

fourth.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(216, 1, 1, 1)";
  });
});

fifth.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(223, 4, 70, 1)";
  });
});

sixth.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(127, 31, 85, 1) ";
  });
});

seventh.addEventListener("click", function () {
  rectangles.forEach((rec) => {
    rec.style.backgroundColor = "rgba(93, 18, 199, 1)";
  });
});
