// const questions = Array.from(document.querySelectorAll("span"));
// console.log(questions);
// const answers = Array.from(document.querySelectorAll("p"));
// console.log(answers);
// const divsArr = Array.from(document.querySelectorAll(".d"));
// console.log(divsArr[0].children[1].textContent);
// const arrows = Array.from(document.querySelectorAll(".arrow-down "));
// console.log(arrows);
// console.log(divsArr[0].children[0].children[1]);
// for (let i = 0; i < divsArr.length; i++) {
//   divsArr[i].addEventListener("click", () => {
//     for (let j = 0; j < divsArr.length; j++) {
//       divsArr[j].children[1].style.display = "none";
//       // divsArr[j].children[0].children[1].style.tra
//     }
//     divsArr[i].children[1].style.display = "block";
//   });
// }

const questionsDivs = document.querySelector(".texts-div");
const buttons = Array.from(document.querySelectorAll(".d"));

questionsDivs.addEventListener("click", (event) => {
  const element = event.target.closest(".d");
  if (!element) return;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  element.classList.add("active");
});
