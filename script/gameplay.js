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
        if(Players[1].isOnMove && Players[1].isBot)
        {
            let x;
            
            x = Math.round(Math.random()*8);
            
            gameArray[x] = Players[1].sign;
            console.log(Players);
            SwitchMoves();
            console.log(Players);
            
            //vizualize
            VizArray();
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
                //vizaulize
                VizArray();
                CheckForSetWinner();
                for(let j = 0;j<2;j++){
                    if(Players[j].isBot && gameArray.includes("-"))
                    {
                        let x;
                        do{
                            x = Math.round(Math.random()*8);
                        }while(gameArray[x] != "-");
                        gameArray[x] = Players[j].sign;
                        SwitchMoves();
                        //vizulize
                        VizArray();
                        CheckForSetWinner();
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

        if(Players[0].sign == "X")
        {
            Players[0].sign == "O";
            Players[1].sign == "X";
        }else{
            Players[1].sign == "O";
            Players[0].sign == "X";
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

