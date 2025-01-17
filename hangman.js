let correctLetters = [];
let wrongLetters = [];
let lostLives = 0;
let numberOfUnguessedLetters = 0;
// ----- functions -----
function fireLetter(letter){
        let firedLetter = document.createElement('div');
        firedLetter.textContent = letter.textContent;
        firedLetter.className = 'firedLetter';
        if ((correctLetters.includes((letter)))||(wrongLetters.includes((letter)))){
            alert(`Letter ${letter.textContent} was already fired`)
        } else {
            document.getElementById(`firedLettersDiv`).appendChild(firedLetter);
        }
    }
function evaluateTheGame (lostLives){
    if (lostLives > 2){
        alert(`You lost the game. The film was
            ${randomFilmName}`)
        finishTheGame();
    } else {
        alert(`CONGRATULATIONS!!! You win the game. The film was
            ${randomFilmName}`)
        finishTheGame();
    }
}
function finishTheGame(){
    for (i=0; i<document.getElementsByClassName('letterBtn').length; i++){
        document.getElementsByClassName('letterBtn')[i].disabled = true;
        document.getElementById(`hintBtn`).style.display = 'none';
    }
    document.getElementById(`startBtn`).style.display = 'inline';
    for (let i = 0; i < randomFilmName.length; i++) {
        if (document.getElementsByClassName(`letterSpace`)[i].textContent != " ") {
            document.getElementsByClassName(`letterSpace`)[i].textContent = randomFilmName[i];
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
    // ----- drawing lines for letters from the film ------
    for (let i = 0; i < randomFilmName.length; i++) {
        let letterSpace = document.createElement('div');
        document.getElementById(`filmName`).appendChild(letterSpace);
        letterSpace.className = 'letterSpace';
        if (randomFilmName.charCodeAt(i) != 32) {
            letterSpace.textContent = "-";
            numberOfUnguessedLetters ++;
        }
    }
    console.log(numberOfUnguessedLetters);
}
    // ------- select random film name ------------
let filmNames = [`LOCK STOCK AND TWO SMOKING BARRELS`, `SNATCH`, `THE GOOD THE BAD AND THE UGLY`, `THE LION KING`];
const randomFilm = Math.floor(Math.random()*filmNames.length);
const randomFilmName = filmNames[randomFilm]

// ------ start the game --------

startNewGame();

let startBtn = document.getElementById(`startBtn`);
startBtn.addEventListener("click", function() {
    location.reload();
})

// ------ clicking letters to guess --------
for (let i = 0; i < document.getElementsByClassName(`letterBtn`).length; i++) {
    let theLetter = document.getElementsByClassName(`letterBtn`);
    theLetter[i].addEventListener("click", function() {
        fireLetter(theLetter[i]);
        if (randomFilmName.includes(theLetter[i].textContent)){
            for (j = 0; j < randomFilmName.length; j++){
                if (randomFilmName[j] === theLetter[i].textContent) {
                    document.getElementsByClassName(`letterSpace`)[j].textContent = theLetter[i].textContent
                    correctLetters.push(theLetter[i])
                    numberOfUnguessedLetters = numberOfUnguessedLetters - 1;
                }
            }
            if (numberOfUnguessedLetters === 0) {
                evaluateTheGame(lostLives);
            }
        } else {
            wrongLetters.push(theLetter[i])
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
    })
}
// ------ shoot a hint -------- da ne raboti ako ima samo edno pole nepoznato !!!!!!!!!!!!!
let hintArray = []
let hintBtn = document.getElementById(`hintBtn`);
hintBtn.addEventListener("click", function() {
    for (i=0; i<randomFilmName.length; i++) {
        let j = i - 1;
        if ((correctLetters.map(element => element.textContent).includes(randomFilmName[i])!=true)&&(randomFilmName[i]!=" ")){
            hintArray.push(randomFilmName[i]);
        }
    }
    const randomHint = Math.floor(Math.random()*hintArray.length);
    const randomHintLetter = hintArray[randomHint]
    console.log(randomHintLetter)
    for (j = 0; j < randomFilmName.length; j++){
        if (randomFilmName[j] === randomHintLetter.textContent) {
            document.getElementsByClassName(`letterSpace`)[j].textContent = randomHintLetter.textContent
            correctLetters.push(randomHintLetter)
            numberOfUnguessedLetters = numberOfUnguessedLetters - 1;
        }
    }

})


        
    










