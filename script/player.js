import { signOption,playersOption } from "./first-site-script.js";

class Player
{
    constructor(sign, isBot, isOnMove,FirstMove,score)
    {
        this.sign = sign;
        this.isBot = isBot;
        this.isOnMove = isOnMove;
        this.FirstMove = FirstMove;
        this.score = score;
    }
    
}
var secondSign;
export var Players = [];
var Player1, Player2;
export function GeneratePlayers()
{
    if(signOption == 0)
    {
        Player1 = new Player("X", false,true,true,0);
        secondSign = "O";
    }
    else{
        Player1 = new Player("O", false,true,true,0);
        secondSign = "X";
    }

    if(playersOption == 0)
    {
        Player2 = new Player(secondSign, true,false,false,0);
    }
    else{
        Player2 = new Player(secondSign, false,false,false,0);
    }

    Players.push(Player1);
    Players.push(Player2);
    
}

