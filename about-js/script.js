button1 = document.getElementById("btn1");
button2 = document.getElementById("btn2");
button3 = document.getElementById("btn3");
button4 = document.getElementById("btn4");
button5 = document.getElementById("btn5");
button6 = document.getElementById("btn6");
buttons = [button1,button2,button3,
    button4,button5,button6];
buttons.forEach(element => {
    element.addEventListener("click", () => {
        element.lastElementChild.classList.toggle("tgl-plus");
        element.firstElementChild.classList.toggle("tgl-circle");
    });
});