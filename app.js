let strikeButton=document.getElementById("strike");
let resetButton=document.getElementById("reset");

let scoreTeam1=document.getElementById("score-team1");
let wicketsTeam1=document.getElementById("wickets-team1");

let scoreTeam2=document.getElementById("score-team2");
let wicketsTeam2=document.getElementById("wickets-team2");

let team1Score=0;
let team2Score=0;
let team1wickets=0;
let team2wickets=0;

let turn=1;
let possibleOutcomes=[0,1,2,3,4,6,"W"];

let team1Ball=0;
let team2Ball=0;

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

function updateScore(){
    scoreTeam1.textContent=team1Score;
    wicketsTeam1.textContent=team1wickets;
    scoreTeam2.textContent=team2Score;
    wicketsTeam2.textContent=team2wickets
}

function gameOver(){
    gameOverAudio.play();
    if(team1Score > team2Score) alert("Team one-ENgland wins");
    if(team2Score>team1Score) alert("Team two-Australia wins");
    if(team1Score==team2Score) alert("It is a draw");

}

function resetGame(){
    window.location.reload();
}

resetButton.addEventListener("click",function(){
    resetGame();
})

function strikeGame(){
    strikeAudio.play();
    let randomElement=possibleOutcomes[Math.floor( Math.random()*possibleOutcomes.length)]
    if(turn==1){
        team1Ball++;
        document.querySelector(`#team1-superover div:nth-child(${team1Ball})`).textContent = randomElement;
        if(team1Ball==6 || team1wickets==2){
            turn=2;
        }
        if(randomElement=="W"){
            team1wickets++;
        }
        else{
            team1Score+=randomElement;
        }

    }

    if(turn==2){
        team2Ball++;
        document.querySelector(`#team2-superover div:nth-child(${team2Ball})`).textContent = randomElement;
        if(team2Ball==6 || team2wickets==2 || team2Score>team1Score){
            turn=3;
            gameOver();
        }
        if(randomElement=="W"){
            team2wickets++;
        }
        else{
            team2Score+=randomElement;
        }

    }
    updateScore();
}

strikeButton.addEventListener("click",function(){
    strikeGame();
})

