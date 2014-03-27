var humanScore = 0,
    botScore = 0,
    newEntry = document.getElementById('newEntry');

document.getElementById('rock').addEventListener('click', function(){
    compare('rock', getBotMove());
});
document.getElementById('paper').addEventListener('click', function(){
    compare('paper', getBotMove());
});
document.getElementById('scissors').addEventListener('click', function(){
    compare('scissors', getBotMove());
});

var getBotMove = function () {
    var botMove = Math.random();
    if (botMove < 0.34) {
        return "rock";
    }
    else if(botMove <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function compare(choice1, choice2){
    if (choice1===choice2){
        document.getElementById('status').innerHTML = "The result is a tie!"
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            updateHumanScore(humanScore);
        }
        else{
            updateBotScore(botScore);
        }
    }
    else if(choice1==="paper"){
        if(choice2==="rock"){
            updateHumanScore(humanScore);
        }
        else{
            updateBotScore(botScore);
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="rock"){
            updateHumanScore(humanScore);
        }
        else{
            updateBotScore(botScore);
        }
    }
}

function updateHumanScore(num){
    document.getElementById('status').innerHTML = "You win!";
    humanScore = parseFloat(num) + 1;
    document.getElementById('humanScore').innerHTML = humanScore;
    console.log(humanScore)
}

function updateBotScore(num){
    document.getElementById('status').innerHTML = "You lose!";
    botScore = parseFloat(num)+1;
    document.getElementById('botScore').innerHTML = botScore
    console.log(botScore)
}

