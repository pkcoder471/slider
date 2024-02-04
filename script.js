const buttons = document.querySelectorAll("input");
var counter = 0;
setInterval(() => {
    buttons[counter].checked = true;
    counter++;
    if (counter == 4) {
        counter = 0;
    }
}, 3000);