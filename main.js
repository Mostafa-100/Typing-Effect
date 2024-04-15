const span = document.querySelector("span:last-child");
let values = ["Programmer", "Freelancer", "Entrepreneur", "Team Manager", "Blogger"];
let index = 0;

setInterval(function () {

    if (index >= values.length) {
        index = 0;
    }

    span.textContent = values[index];

    index++;
}, 2000)