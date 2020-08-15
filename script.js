let level = 0;
let clicked = []
const btnArray = ["#red", "#blue", "#green", "#orange"]
let levelArray = []

const stringify = JSON.stringify
const parse = JSON.parse

// INITIAL LEVEL
for (let i = 1; i <= 5; i++) {
    let random = Math.floor(btnArray.length * Math.random());
    let randomBtn = btnArray[random]
    levelArray.push(randomBtn)
}
console.log(levelArray);





let currentLevel = stringify(levelArray.splice(btnArray.length - level))
console.log(currentLevel)





// checking player clicks
function checking() {
    if (stringify(clicked).lenght === currentLevel.lenght) {
        if (stringify(clicked) === currentLevel) {
            console.log('%c Level Complete!', 'background: green; color: white')
            //NEXT LEVEL
            level++
            console.log(level)
            console.log(currentLevel)
            return clicked.pop()
        }
        else {
            console.log('%c Wrong!', 'background: red; color: white')
            clicked.length = 0;
            level = 1 //strict mode
            return
        }

    }
}


// player clicks
$(btnArray[0]).click(function () {
    clicked.push('#' + this.id);
    checking()
});
$(btnArray[1]).click(function () {
    clicked.push('#' + this.id);
    checking()
});
$(btnArray[2]).click(function () {
    clicked.push('#' + this.id);
    checking()
});
$(btnArray[3]).click(function () {
    clicked.push('#' + this.id);
    checking()
});