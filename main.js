// let spanElements = document.querySelectorAll('span');
// spanElements.forEach(span => {
//   span.addEventListener('click', function (e) {
//     spanElements.forEach(s => s.classList.remove('active'));
//     e.target.classList.add('active');
//   });
// });

// import generateRandomQuote from './text.js';
// let text = generateRandomQuote();
// console.log(`Random Text : ${text}`);
// let readBox = document.querySelector('.typingContainer p');
// readBox.innerText = text.toLowerCase();

// let writeBox = document.querySelector('#typer');
// let isWriting = false;
// let time = 15000;
// let mistakes = 0;

// writeBox.addEventListener('input', function () {
//   if (isWriting == false) {
//     isWriting = true;
//     timer(time);
//   }

// });

// function timer(time) {
//   let timeLeft = time;
//   setInterval(() => {
//     if (timeLeft == 0) {
//       writeBox.contentEditable = false;
//       showScores();
//       return;
//     }
//     timeLeft -= 1000;
//     console.warn(timeLeft);
//   }, 1000);
// }

// function showScores() {

// }