import { Players } from "./player.js";
import { GenerateBlankPage } from "./game-screen-generator.js";

export let gameArray = ["-","-","-","-","-","-","-","-","-"];
let playIndex;
let body = document.querySelector("body");
export function PlayGame()
{
    //ako je prvi na potezu bot
    
    let boxes = document.querySelectorAll(".boxes");
    if(!gameArray.includes("X") &&  !gameArray.includes("O"))
    {
        if(Players[1].isOnMove && Players[1].isBot)
        {
            let x;
            x = Math.round(Math.random()*8);
            gameArray[x] = Players[1].sign;
            SwitchMoves();
            VizArray();
            CheckForSetWinner();
            CheckForGameWinner();
            
            
        }
    }
    

    boxes.forEach((element,index)=>{
        element.addEventListener("click", ()=>{
            for(let i = 0; i<2;i++)
            {
                
                if(Players[i].isOnMove)
                {
                    playIndex = i;
                }
            }

            if(gameArray[index] == "-")
            {
                gameArray[index] = Players[playIndex].sign;
                SwitchMoves();
                VizArray();
                CheckForSetWinner();
                CheckForGameWinner();
                //bot move
                for(let j = 0;j<2;j++){
                    if(Players[j].isBot && gameArray.includes("-"))
                    {
                        let x;
                        do{
                            x = Math.round(Math.random()*8);
                        }while(gameArray[x] != "-" && gameArray.includes("-"));
                        gameArray[x] = Players[j].sign;
                        SwitchMoves();
                        CheckForSetWinner();
                        VizArray();
                        CheckForGameWinner();
                    }
                }



            }
        });
    })
}


function VizArray()
{
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((element,index) => {
        if(gameArray[index] == "-")
        {
            element.textContent = "";
        }
        else{
            element.textContent = gameArray[index]; 
        }
    });
}


function CheckForSetWinner(){
    
    if(CombChecker(Players[0].sign)){
        Players[0].score++;

        MoveSwitch();
        GenerateBlankPage();
        PlayGame();
        return;
    }
    if(CombChecker(Players[1].sign)){
        Players[1].score++;

        MoveSwitch();

        GenerateBlankPage();
        PlayGame();
        return;
    }
    
    
    if(!gameArray.includes("-"))
    {

        MoveSwitch();
        GenerateBlankPage();
        PlayGame();
        
        return;
    }
}

function CheckForGameWinner(){
    let body = document.querySelector("body");
    let winner;
    if(Players[0].score >=3)
    {
        winner = document.createElement("div");
        winner.textContent = "Winner is Player 1!";
    }
    if(Players[1].score >=3){
        if(Players[1].isBot)
        {
            winner = document.createElement("div");
            winner.textContent = "Winner is Computer!";
        }
        else{
            winner = document.createElement("div");
            winner.textContent = "Winner is Player 2!";
        }
    }

    if(Players[0].score >=3 || Players[1].score >=3)
    {
        body.textContent = "";
        winner.classList.add("winner-text");
        let playAgain = document.createElement("div");
        playAgain.classList.add("play-again-button");
        playAgain.textContent = "Play Again";
        let box = document.createElement("div");
        box.classList.add("box");
        box.appendChild(winner);
        box.appendChild(playAgain);
        
        body.appendChild(box);

        playAgain.addEventListener("click",()=>{
            body.innerHTML = "";
            Players[0].score = 0;
            Players[1].score = 0;
            gameArray = ["-","-","-","-","-","-","-","-","-"];
            GenerateBlankPage();

            PlayGame();
            
        })
    }

}

function CombChecker(sign){
    if(gameArray[0] == sign && gameArray[1] == sign && gameArray[2] == sign ){return true;}
    if(gameArray[3] == sign && gameArray[4] == sign && gameArray[5] == sign ){return true;}
    if(gameArray[6] == sign && gameArray[7] == sign && gameArray[8] == sign ){return true;}

    if(gameArray[0] == sign && gameArray[3] == sign && gameArray[6] == sign ){return true;}
    if(gameArray[1] == sign && gameArray[4] == sign && gameArray[7] == sign ){return true;}
    if(gameArray[2] == sign && gameArray[5] == sign && gameArray[8] == sign ){return true;}

    if(gameArray[0] == sign && gameArray[4] == sign && gameArray[8] == sign ){return true;}
    if(gameArray[2] == sign && gameArray[4] == sign && gameArray[6] == sign ){return true;}

}

function MoveSwitch(){
        
        Players[0].FirstMove = !Players[0].FirstMove;
        Players[1].FirstMove = !Players[1].FirstMove;

        if(Players[0].FirstMove)
        {
            Players[0].isOnMove = true;
            Players[1].isOnMove = false;
        }
        else{
            Players[0].isOnMove = false;
            Players[1].isOnMove = true;
        }

        
        gameArray = ["-","-","-","-","-","-","-","-","-"];
        

}


function SwitchMoves()
{
    if(Players[0].isOnMove)
    {
        Players[0].isOnMove = false;
        Players[1].isOnMove = true;
    }
    else{
        Players[1].isOnMove = false;
        Players[0].isOnMove = true;
    }
}

