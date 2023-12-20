import "./index.css";
let spanElements = document.querySelectorAll('span');
spanElements.forEach(span => {
    span.addEventListener('click', function (e) {
        spanElements.forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
    });
});