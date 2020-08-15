let level = 1;
let clicked = []
const btnArray = ["red", "blue", "green", "orange"]
let levelsArray = []
let currentLevel;

const stringify = JSON.stringify
const parse = JSON.parse

// INITIAL LEVEL
$(document).ready(() => {
    for (let i = 1; i <= 10; i++) {
        let random = Math.floor(btnArray.length * Math.random());
        let randomBtn = btnArray[random]
        levelsArray.push(randomBtn)
    }
    console.log(levelsArray);
    newLevel()

})

function newLevel() {
    currentLevel = [levelsArray[levelsArray.length - level]]
    console.log(currentLevel)
}



// checking player clicks
function checking() {
    if (stringify(clicked.lenght) === stringify(currentLevel.lenght)) {
        if (stringify(clicked) === stringify(currentLevel)) {
            if (level === 10) {
                console.log('%c You Won!', 'background: yellow; color: black')
            } else {
                console.log('%c Level Complete!', 'background: green; color: white')
                //NEXT LEVEL
                level++
                clicked.pop()
                newLevel()
                return
            }
        }
        else {
            console.log('%c Wrong!', 'background: red; color: white')
            clicked.length = 0;
            level - 1
            newLevel()
            return
        }

    }
}


// player clicks
$("#red").click(function () {
    clicked.push("red");
    checking()
});
$("#blue").click(function () {
    clicked.push("blue");
    checking()
});
$("#green").click(function () {
    clicked.push("green");
    checking()
});
$("#orange").click(function () {
    clicked.push("orange");
    checking()
});