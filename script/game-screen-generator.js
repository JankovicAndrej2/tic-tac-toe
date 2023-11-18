import { signOption,playersOption } from "./first-site-script.js";
import { Players } from "./player.js";
import { PlayGame } from "./gameplay.js";

export function GenerateBlankPage(){
    let body = document.querySelector("body");
    body.innerHTML = "";
    let grid = document.createElement("div");
    grid.classList.add("grid");
    
    for(let i = 0; i<=8;i++)
    {
        let box =document.createElement("div");
        box.classList.add("boxes");
        box.classList.add("box-" + i);
        grid.appendChild(box);
    }
    body.appendChild(grid);
    
    let playerName1 = document.createElement("div");
    let playerName2 = document.createElement("div");
    playerName1.classList.add("player-name-1");
    playerName2.classList.add("player-name-2");
    
    
    let playerScore1 = document.createElement("div");
    let playerScore2 = document.createElement("div");
    playerScore1.classList.add("player-score-1");
    playerScore2.classList.add("player-score-2");
    
    let playsFirst1= document.createElement("div");
    let playsFirst2 = document.createElement("div");
    playsFirst1.classList.add("plays-first-1");
    playsFirst2.classList.add("plays-first-2");
    
    let sign1 = document.createElement("div");
    let sign2 = document.createElement("div");
    sign1.classList.add("sign-1");
    sign2.classList.add("sign-2");
    
    
    //--------------------------------------------
    if(playersOption == 0)
    {
        playerName1.textContent = "Player 1";
        playerName2.textContent = "Computer";
    }
    else{
        playerName1.textContent = "Player 1";
        playerName2.textContent = "Player 2";
    }
    body.appendChild(playerName1);
    body.appendChild(playerName2);
    
    playerScore1.textContent = Players[0].score;
    playerScore2.textContent = Players[1].score;
    body.appendChild(playerScore1);
    body.appendChild(playerScore2);
    
    if(Players[0].FirstMove)
    {
        playsFirst1.textContent = "Plays First";
    }
    else{
        playsFirst2.textContent = "Plays First";
    }
    
    body.appendChild(playsFirst1);
    
   if(Players[0].sign == "X")
   {
        sign1.textContent = "X";
        sign2.textContent = "O";
   }
   else{
        sign1.textContent = "O";
        sign2.textContent = "X";
   }
    
    body.appendChild(sign1);
    body.appendChild(sign2);

    
}
