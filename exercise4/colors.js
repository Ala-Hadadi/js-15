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

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    if (circle.classList.contains("first")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(31, 127, 102)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("second")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(255, 200, 0)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("third")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(255, 123, 0)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("fourth")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(216, 1, 1)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("fifth")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(223, 4, 70)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("sixth")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(127, 31, 85) ";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    } else if (circle.classList.contains("seventh")) {
      let opacity = 1;
      rectangles.forEach((rec) => {
        rec.style.backgroundColor = "rgb(93, 18, 199)";
        rec.style.opacity = `${opacity}`;
        opacity = opacity - 0.15;
      });
    }
  });
});
