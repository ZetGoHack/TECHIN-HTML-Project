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
let texts = ['“The first spark is never the final form — iterate until it breathes. Lorem ipsum dolor omen.”','“Structure creates space for chaos to turn into brilliance. Lorem ipsum dolor omen.”','“Tech is only as powerful as the problem it’s solving. Lorem ipsum dolor omen.”','“Relationships move faster than strategy — build trust early. Lorem ipsum dolor omen.”','“Unique perspectives shape unique products, which is what you need to survive these days.”','“Empowered teams create truly amazing products. Set the north star and let them follow it.”'];
let professions = ['Founder & CEO','Co-founder & COO','Co-founder & CTO','Business Development Lead','Lead Marketing','Head of Talent']

let toHalfSvg = document.getElementById("toHalf");
let mediaR = window.matchMedia("(max-width: 375px)");
function checkMedia (e) {
    if (e.matches) {
        toHalfSvg.setAttribute("viewBox", "0 100 100 200");
    }
    else {
        toHalfSvg.setAttribute("viewBox", "0 0 100 200");
    }
}
checkMedia(mediaR);
mediaR.addEventListener("change", checkMedia);


let buttons = [];
blocks.forEach(block => {
    for (let elmnt of block.children) {
        if (elmnt.tagName.toLowerCase() == "button") {
            buttons.push(elmnt);
            break;
        }
    }
});
let counter = 5;
buttons.forEach((element, counter) => {
    element.addEventListener("click", () => {
        element.children[0].lastElementChild.classList.toggle("tgl-plus");
        element.children[0].firstElementChild.classList.toggle("tgl-circle");
        element.parentElement.classList.toggle("backgrnd");
        for (let elmnt of element.parentElement.children) {
            
            if (elmnt.tagName == "IMG") {
                elmnt.classList.toggle("invisible");
            }
            if (elmnt.tagName == "P") {
                if (elmnt.classList.contains("white")) {
                    if (elmnt.classList.contains("state")) {
                        elmnt.textContent = professions[counter];
                    }
                    else {
                        elmnt.textContent = texts[counter];
                    }
                    element.classList.toggle(`pos${counter}`);
                    elmnt.classList.toggle("state");
                }
                else {
                    elmnt.classList.toggle("heig");
                }
            }
            if (elmnt.tagName == "svg") {
                elmnt.classList.toggle("invisible");
            }
        }
    });
});

