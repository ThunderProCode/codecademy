let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}

function getAbsoluteDistance(val1,val2){
    return Math.abs(val1-val2);
}

function compareGuesses(user,pc,num){
    if(user<0 || user > 9){
        return alert();
    }
    
    const usuario = getAbsoluteDistance(user,num);
    const compu = getAbsoluteDistance(pc,num);

    console.log(compu+' pc');
    console.log(usuario +' user');

    if(usuario===compu){
        return true;
    }else if(usuario<compu){
        return true;
    }else{
        return false;
    }
}

function updateScore(st1){
    switch(st1){
        case 'human': humanScore += 1;
        break;
        case 'computer': computerScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}

