

let choosePlayers = document.querySelectorAll(".players");

let playersOption;


choosePlayers.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        if(index == 1){
            choosePlayers[1].style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
            choosePlayers[0].style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
            playersOption = index;
        }
        else if(index == 0)
        {
            choosePlayers[0].style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
            choosePlayers[1].style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
            playersOption = index;
        }
    })
    element.addEventListener("mouseover", ()=>{
        element.style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
    })
    element.addEventListener("mouseout", ()=>{
        if(!(index == playersOption))
        {
            element.style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
        }
    })

})



let chooseSign = document.querySelectorAll(".signs");
let signOptions;

chooseSign.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        if(index == 1){
            chooseSign[1].style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
            chooseSign[0].style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
            playersOption = index;
        }
        else if(index == 0)
        {
            chooseSign[0].style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
            chooseSign[1].style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
            playersOption = index;
        }
    })
    element.addEventListener("mouseover", ()=>{
        element.style.textShadow = "0px 0px 13px rgb(11, 148, 228)";
    })
    element.addEventListener("mouseout", ()=>{
        if(!(index == playersOption))
        {
            element.style.textShadow = "0px 0px 0px rgb(11, 148, 228)";
        }
    })
})

let start = document.querySelector(".start");
let body = document.querySelector("body");
start.addEventListener("click", ()=>{
    body.innerHTML = "";
})




