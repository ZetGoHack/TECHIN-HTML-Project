let block1 = document.getElementById("romb1");
let block2 = document.getElementById("romb2");
let block3 = document.getElementById("romb3");
let block4 = document.getElementById("romb4");
let block5 = document.getElementById("romb5");
let block6 = document.getElementById("romb6");
let blocks = [
    block1,block2,block3,
    block4,block5,block6
];
let texts = ['9','1','2','3','“Unique perspectives shape unique products, which is what you need to survive these days.”','“Empowered teams create truly amazing products. Set the north star and let them follow it.”']
let professions = ['Founder & CEO','Co-founder & COO','Co-founder & CTO','Business Development Lead','Lead Marketing','Head of Talent']




let buttons = [];
blocks.forEach(block => {
    for (let elmnt of block.children) {
        if (elmnt.tagName == "svg") {
            buttons.push(elmnt);
            break;
        }
    }
});
let counter = 5;
buttons.forEach((element, counter) => {
    console.log(professions[counter]);
    element.addEventListener("click", () => {
        element.lastElementChild.classList.toggle("tgl-plus");
        element.firstElementChild.classList.toggle("tgl-circle");
        for (let elmnt of element.parentElement.children) {
            if (elmnt.tagName == "IMG") {
                elmnt.classList.toggle("invisible");
            }
            if (elmnt.tagName == "DIV") {
                if (elmnt.classList.contains("white")) {
                    if (elmnt.classList.contains("state")) {
                        elmnt.textContent = professions[counter];
                    }
                    else {
                        elmnt.textContent = texts[counter];
                    }
                    elmnt.classList.toggle("state");
                }
            }
        }
    });
});