import * as textModule from './text.js';

let options = document.querySelector('.options');
let punctuation = options.querySelectorAll('span')[0];
let numbers = options.querySelectorAll('span')[1];
let time = options.querySelectorAll('span')[2];
let quote = options.querySelectorAll('span')[3];
let custom = options.querySelectorAll('span')[4];

let typingContainer = document.querySelector('.typingContainer');
let reader = typingContainer.querySelectorAll('p')[0];
let writer = typingContainer.querySelectorAll('p')[1];

let results = document.querySelector('.results');
let wpm = results.querySelectorAll('input')[0];
let accuracy = results.querySelectorAll('input')[1];
let mistakes = results.querySelectorAll('input')[2];
let timeLeft = results.querySelectorAll('input')[3];

reader.innerHTML = textModule.randomText();

document.addEventListener('DOMContentLoaded', function () {
    writer.focus();
})

// writer.addEventListener('scroll', function () {
//     // Check if the writer input is at the end
//     if (writer.scrollLeft + writer.clientWidth >= writer.scrollWidth) {
//         // Synchronize the reader input's scroll position
//         reader.scrollLeft = writer.scrollLeft;
//     }
// });