let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
// identify -> click  -> again click
pencil.addEventListener("click", function (e) {
    tool.strokeStyle="red";
    if (cTool == "pencil") {
        // second click
        // options show 
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {

            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "pencil";
        tool.lineWidth=pencilsize;
    }
})
eraser.addEventListener("click", function (e) {
    tool.strokeStyle="white";
    if (cTool == "eraser") {
        // second click
        // options show 
        options[1].style.display = "flex";
    } else {
        // eraser.style.border = "1px solid red";
        // koi aur clicked aur usko options visible to wo remove ho jaaye 
        cTool = "eraser";
        tool.strokeStyle="white";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        tool.lineWidth=eraseresize;
    }
})
rect.addEventListener("click", function (e) {
    tool.strokeStyle="red";
    if (cTool == "rect") {
        // second click
        // options show 
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "rect";
        tool.lineWidth=rectsize;
    }
})
line.addEventListener("click", function (e) {
    tool.strokeStyle="red";
    if (cTool == "line") {
        // second click
        // options show 
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // eraser.style.border = "1px solid red";
        cTool = "line";
        tool.lineWidth=linesize;
    }
})

let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
})