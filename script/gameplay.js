import { Players } from "./player.js";
import { GenerateBlankPage } from "./game-screen-generator.js";

export let gameArray = ["-","-","-","-","-","-","-","-","-"];
let playIndex;
let body = document.querySelector("body");
export function PlayGame()
{
    //ako je prvi na potezu bot
    
    let boxes = document.querySelectorAll(".boxes");
    if(!gameArray.includes("X") && !gameArray.includes("O"))
    {
        if(Players[1].isOnMove)
        {
            let x;
            do{
                x = Math.round(Math.random()*8);
            }while(gameArray[x] != "-");
            gameArray[x] = Players[j].sign;
            Players[0].isOnMove = !Players[0].isOnMove;
            Players[1].isOnMove = !Players[1].isOnMove;
            //vizualize
            VizArray()
        }
    }
    

    boxes.forEach((element,index)=>{
        element.addEventListener("click", ()=>{
            for(let i = 0; i<2;i++)
            {
                console.log(Players);
                if(Players[i].isOnMove)
                {
                    playIndex = i;
                }
            }

            if(gameArray[index] == "-")
            {
                gameArray[index] = Players[playIndex].sign;
                Players[0].isOnMove = !Players[0].isOnMove;
                Players[1].isOnMove = !Players[1].isOnMove;
                //vizaulize
                VizArray()
                for(let j = 0;j<2;j++){
                    if(Players[j].isBot && gameArray.includes("-"))
                    {
                        let x;
                        do{
                            x = Math.round(Math.random()*8);
                        }while(gameArray[x] != "-");
                        gameArray[x] = Players[j].sign;
                        Players[0].isOnMove = !Players[0].isOnMove;
                        Players[1].isOnMove = !Players[1].isOnMove;
                        //vizulize
                        VizArray();
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

}

function CheckForGameWinner(){

}

function CombChecker(){}