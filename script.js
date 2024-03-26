let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#sbutton");
let newgame = document.querySelector("#start");
let msgContainer = document.querySelector(".Beginning");
let msg = document.querySelector("#msg");
let turnO = true;

const win_pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnO) {
            box.innerText = "🧀";
            turnO = false;
        } else {
            box.innerText = "🐁";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText = " ";
        
    }
}
const reset = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWin = () => {
    for (let pattern of win_pattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }

};
resetbutton.addEventListener("click", reset);
newgame.addEventListener("click", reset);