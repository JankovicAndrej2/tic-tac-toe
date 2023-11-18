import { signOption,playersOption } from "./first-site-script.js";
import { GenerateBlankPage } from "./game-screen-generator.js";
import { PlayGame } from "./gameplay.js";
import { GeneratePlayers } from "./player.js";



let body = document.querySelector("body");
let options = document.querySelectorAll(".option");
let start = document.querySelector(".start");

//paljenje tipke start
options.forEach((element)=>{
    
    element.addEventListener("click", ()=>{
        if((playersOption == 1 || playersOption == 0)&&(signOption == 0 || signOption == 1)) {
            
            start.innerHTML = "START";
        }
    })
})

//klik na start
if(start)
{
    start.addEventListener("click",()=>{
        body.innerHTML = "";
        GenerateBlankPage();
        GeneratePlayers();
        
        PlayGame();
    })
}
