// -------- draw alhpabet buttons -----------
for (let i = 65; i <= 90; i++) {
    let letterBtn = document.createElement('button');
    let letter = String.fromCharCode(i);
    letterBtn.textContent = letter;
    letterBtn.className = 'letterBtn';
    document.body.appendChild(letterBtn);
  }
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
// ------- select random film name ------------
let filmNames = [`LOCK STOCK AND TWO SMOKING BARRELS`, `SNATCH`];
const randomFilm = Math.floor(Math.random()*filmNames.length);
const randomFilmName = filmNames[randomFilm]
console.log(randomFilmName)
// ----- drawing lines for letters from the film ------
for (let i = 0; i < randomFilmName.length; i++) {
    let letterSpace = document.createElement('div');
    document.body.appendChild(letterSpace);
    letterSpace.className = 'letterSpace';
    if (randomFilmName.charCodeAt(i) != 32) {
        letterSpace.textContent = "-";
    }
}
// ------ clicking letters to guess --------
for (let i = 0; i < document.getElementsByClassName(`letterBtn`).length; i++) {
    let theLetter = document.getElementsByClassName(`letterBtn`);
    theLetter[i].addEventListener("click", function() {
        console.log(theLetter[i].textContent);
        if (randomFilmName.includes(theLetter[i].textContent)){
            for (j = 0; j < randomFilmName.length; j++){
                if (randomFilmName[j] === theLetter[i].textContent) {
                    document.getElementsByClassName(`letterSpace`)[j].textContent = theLetter[i].textContent
                }
            }
        } else {
            alert(`you lost 1 life`)
        }
    })
}
//  ???? ako dva pati klikne na bukcva sto ja pogodil, treba nesto da se sluci
//  ???? nov red da prefrla na zbor a ne na bukva !!!


