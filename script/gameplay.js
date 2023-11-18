import { Players } from "./player.js";

export let gameArray = ["-","-","-","-","-","-","-","-","-"];
let playIndex;
export function PlayGame(){
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((element,index) => {
        element.addEventListener("click",()=>{
            for(let i = 0; i<2;i++)
            {
                console.log(Players);
                if(Players[i].isOnMove)
                {
                    playIndex = i;
                }
            }
            console.log(gameArray);
            if(gameArray[index] == "-")
            {
                gameArray[index] = Players[playIndex].sign;
                Players[0].isOnMove = !Players[0].isOnMove;
                Players[1].isOnMove = !Players[1].isOnMove;
                console.log(gameArray);
                //play bot move
                for(let j = 0;j<2;j++)
                {
                    if(Players[j].isBot)
                    {
                        let x;
                        do{
                            x = Math.round(Math.random()*8);
                        }while(gameArray[x] != "-");
                        gameArray[x] = Players[j].sign;
                    }
                }
                console.log(gameArray);
            }


            




        })
    });
}