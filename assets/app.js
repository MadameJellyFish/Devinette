
let demarrerBtn = document.querySelector('#demarrerBtn');
// demarrerBtn = 0;
let randomNumInput = document.querySelector('#randomNumInput');
let displayInput = document.querySelector('#displayInput');
let validerBtn = document.querySelector('#validerBtn');
let randomNum = 0;
let resultatAleatoire = randomNum;
let pTentative = document.querySelector('#pTentative');
let consigne = document.querySelector('#consigne');
let tips = document.querySelector('#tips');
let essay = 0;
let pairOuImpair = document.querySelector('#pairOuImpair');
let formDisplay = document.querySelector('#formDisplay');
messageError.innerText == document.querySelector('#messageError');


demarrerBtn.addEventListener('click',start)
    function start() {
    formDisplay.style.display = 'block';
    pTentative.innerHTML = 0;
    displayInput.value = '';
    messageError.innerText = '';
    essay= 0;
}
   




demarrerBtn.addEventListener('click', aleatoire)
function aleatoire() {
    randomNum = Math.floor(Math.random() * 21);
}

demarrerBtn.addEventListener('click', isPair)
function isPair() {
    if (randomNum % 2 == 0) {
        pairOuImpair.innerText = ' pair';
    } else {
        pairOuImpair.innerText  = " impair";
    }
    console.log(randomNum);
}

validerBtn.addEventListener('click', verification)
function verification() {

    if (displayInput.value == ''){
        messageError.innerText ="S'il vous plâit rentrez une caractère valide !";
        // pourrevenir a la base
        return;
    }
    else if(essay > 2){
        formDisplay.style.display = 'none';
        messageError.innerText = "Sorry =( Mais vous pouvez toujours retenter ! La reponse était "+ randomNum ;
        
        return;
    }

    else if (displayInput.value == randomNum) {
        messageError.innerText = 'Bravo, vous avez devinez !!!';
        formDisplay.style.display = 'none';
        return;
    }

    else if (displayInput.value < randomNum) {
        messageError.innerText = 'Nombre trop bas. Retenter !';
        // afficher le nombre de tentatives
        essay++;
        pTentative.innerHTML = essay;
    }

    else if (displayInput.value > randomNum) {
        messageError.innerText = 'Nombre trop haut. Retenter !';
        // afficher le nombre de tentatives
        essay++;
        pTentative.innerHTML = essay;
    }
}
    
