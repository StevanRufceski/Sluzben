let correctLetters = [];
let wrongLetters = [];
let lostLives = 0;
let numberOfUnguessedLetters = 0;

// ----- functions -----
function fireLetter(letter){
        let firedLetter = document.createElement('div');
        firedLetter.textContent = letter.textContent;
        firedLetter.className = 'firedLetter';
        if ((correctLetters.includes((letter.textContent)))||(wrongLetters.includes((letter.textContent)))){
            alert(`Letter ${letter.textContent} was already fired`)
        } else {
            document.getElementById(`firedLettersDiv`).appendChild(firedLetter);
        }
    }
function evaluateTheGame (lostLives){
    if (lostLives > 2){
        alert(`You lost the game. The title was
            ${randomTitleName}`)
        finishTheGame();
    } else {
        alert(`CONGRATULATIONS!!! You win the game. The title was
            ${randomTitleName}`)
        finishTheGame();
    }
}
function finishTheGame(){
    for (i=0; i<document.getElementsByClassName('letterBtn').length; i++){
        document.getElementsByClassName('letterBtn')[i].disabled = true;
        document.getElementById(`hintBtn`).style.display = 'none';
    }
    document.getElementById(`startBtn`).style.display = 'inline';
    for (let i = 0; i < randomTitleName.length; i++) {
        if (document.getElementsByClassName(`letterSpace`)[i].textContent != " ") {
            document.getElementsByClassName(`letterSpace`)[i].textContent = randomTitleName[i];
        }
    }
}
function startNewGame(){
// -------- draw alhpabet buttons -----------
    for (let i = 65; i <= 90; i++) {
        let letterBtn = document.createElement('button');
        let letter = String.fromCharCode(i);
        letterBtn.textContent = letter;
        letterBtn.className = 'letterBtn';
        letterBtn.disabled = false;
        document.getElementsByTagName(`h3`)[0].appendChild(letterBtn);
    }
    for (let i = 0; i < randomTitleName.length; i++) {
        let letterSpace = document.createElement('div');
        document.getElementById(`titleName`).appendChild(letterSpace);
        letterSpace.className = 'letterSpace';
        if (randomTitleName.charCodeAt(i) != 32) {
            letterSpace.textContent = "-";
            numberOfUnguessedLetters ++;
        }
    }
}
function hint(){
    var count = 0;
    for(var i = 0; i < document.getElementsByClassName(`letterSpace`).length; ++i){
        if(document.getElementsByClassName(`letterSpace`)[i].textContent === "-")
            count++;
    }
    if (count > 1){
        for (i=0; i<randomTitleName.length; i++) {
            if ((correctLetters.map(element => element).includes(randomTitleName[i])!=true)&&(randomTitleName[i]!=" ")){
                hintArray.push(randomTitleName[i]);
            }
        }
        const randomHint = Math.floor(Math.random()*hintArray.length);
        const randomHintLetter = hintArray[randomHint];

        let hintLetter = document.createElement('div');
        hintLetter.textContent = randomHintLetter;
        fireLetter(hintLetter);
        correctLetters.push(hintLetter);

        for (i = 0; i < randomTitleName.length; i++){
            if (randomTitleName[i] === randomHintLetter) {
                document.getElementsByClassName(`letterSpace`)[i].textContent = randomHintLetter
                if (correctLetters.includes(randomHintLetter)!=true){
                    correctLetters.push(randomHintLetter)
                }
                numberOfUnguessedLetters = numberOfUnguessedLetters - 1;
            }
        }

        console.log(hintArray);
        hintArray.splice(0, hintArray.length);
    } else {
        alert (`You can not get hint at this stage of the game!`)
    }
}

function guessLetter(theLetter){
    fireLetter(theLetter);
    console.log(theLetter.textContent)
    if (randomTitleName.includes(theLetter.textContent)){
        for (j = 0; j < randomTitleName.length; j++){
            if (randomTitleName[j] === theLetter.textContent) {
                document.getElementsByClassName(`letterSpace`)[j].textContent = theLetter.textContent
                correctLetters.push(theLetter.textContent)
                numberOfUnguessedLetters = numberOfUnguessedLetters - 1;
            }
        }
        if (numberOfUnguessedLetters === 0) {
            evaluateTheGame(lostLives);
        }
    } else {
        wrongLetters.push(theLetter.textContent)
        lostLives ++;
        if (lostLives === 1){
            alert(`you lost ${lostLives} life!`)
        }else if ((lostLives > 1)&&(lostLives < 3)){
            alert(`you lost ${lostLives} lives!`)
        } else {
            alert(`you lost ${lostLives} lives!`)
            evaluateTheGame(lostLives);
        }
    }
}


    // ------- select random title name ------------
let filmNames = [`LOCK STOCK AND TWO SMOKING BARRELS`, `SNATCH`, `THE GOOD THE BAD AND THE UGLY`, `THE LION KING`];
let musicNames = [`WELL COME TO THE JUNGLE`, `RIDERS ON THE STORM`, `ONE MORE CUP OF COFFEE`, `POKVARENA MASTA I PRLJAVE STRASTI`];
// let randomTitle = Math.floor(Math.random()*filmNames.length);
// let randomTitleName = filmNames[randomTitle]
let randomTitleName
let randomTitle





let subjectBtn = document.getElementById(`subjectBtn`);
subjectBtn.addEventListener("click", function() {
    if (document.getElementById('film').checked) {
        randomTitle = Math.floor(Math.random()*filmNames.length);
        randomTitleName = filmNames[randomTitle]
        document.getElementById("popupDiv").style.display = 'none'
        console.log("film")
    }else if (document.getElementById('music').checked){
        randomTitle = Math.floor(Math.random()*musicNames.length);
        randomTitleName = musicNames[randomTitle]
        document.getElementById("popupDiv").style.display = 'none'
        console.log("music")
    }
    console.log(randomTitleName);
    startNewGame();
})

    // ------ start the game --------

// startNewGame();


let startBtn = document.getElementById(`startBtn`);
startBtn.addEventListener("click", function() {
    location.reload();
})

let hintArray = []
let hintBtn = document.getElementById(`hintBtn`);
hintBtn.addEventListener("click", function() {
    hint();
})

for (let i = 0; i < document.getElementsByClassName(`letterBtn`).length; i++) {
    let theLetter = document.getElementsByClassName(`letterBtn`);
    theLetter[i].addEventListener("click", function() {
        guessLetter(theLetter[i])
    })
}

        


