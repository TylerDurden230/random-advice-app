let advice = document.getElementById("advice");
let title = document.getElementById("title");

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        title.innerHTML = `ADVICE #${data.slip.id}`;
        advice.innerHTML = `“${data.slip.advice}”`;
    });
}

getAdvice();