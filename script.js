let level = 1;
let clicked = [];


//btn ids
function getButtons() {
    return $('.button-container').find('.button').map(function () {
        return '#' + this.id;
    }).toArray();
}

const btnArray = getButtons();

// random btn
function random(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function makeArrayFrom(number) {
    return Array.from(Array(number).keys());
}


function levelArray() {
    return makeArrayFrom(5).map(function () {
        const number = random(0, btnArray.length);
        return btnArray[number]
    });
}

console.log(levelArray())

let levelArrayVar = levelArray()
let fullArray = [...levelArrayVar]

console.log(fullArray)

function newLevel(){
    return fullArray.slice(0,level)
}

let currentLevel = newLevel()

console.log(currentLevel)



// current level


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


// checking player clicks
function checking() {
    const toString = JSON.stringify
    if (toString(clicked).lenght === toString(currentLevel.lenght)) {
        if (toString(clicked) === toString(currentLevel)) {
            console.log('%c Level Complete!', 'background: green; color: white')
            level++
            currentLevel
            console.log(newLevel())
            return clicked.pop()
        }
        else {
            console.log('%c Wrong!', 'background: red; color: white')
            clicked.length = 0;
            console.log(newLevel())
            level = 1 //strict mode
            return
        }

    } 
}


// reload page to switch off
//location.reload();

