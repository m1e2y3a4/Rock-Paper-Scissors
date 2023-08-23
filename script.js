const choice=["Rock", "Paper" , "Scissors"];
let select;
function getComputerChoice(){
const index=Math.floor(Math.random()*3);
select=choice[index];
return select
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase(); 
    if(playerSelection==="rock" && computerSelection==="rock"){
        return "draw"
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        return "lose"
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        return "win"
    }
    else if(playerSelection==="scissors" && computerSelection==="scissors"){
        return "draw"
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        return "lose"
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        return "win"
    }
    if(playerSelection==="paper" && computerSelection==="paper"){
        return "draw"
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "win"
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        return "lose"
    }else {
        return "Invalid input. Please choose Rock, Paper, or Scissors.";
      }
    
}
function game(){
    let counter = 1;
    let result;
    let win_count = 0;
    let lose_count = 0;
    let draw_count = 0;
    while(counter<6){
        const playerSelection = prompt("enter Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
       result= playRound(playerSelection, computerSelection);
       if(result==="win"){
        win_count+=1;
       }
       else if(result==="lose"){
        lose_count+=1;
       }else{
        draw_count+=1;
       }
        counter+=1;
        console.log(result);
    }
    return [win_count,lose_count,draw_count]
} 
function final(){
    const [win_count, lose_count, draw_count] = game();
    if(win_count===lose_count){
        return "equal"
    }
    else if(win_count>lose_count){
        return "win"
    }
    else if(lose_count>win_count){
        return "lose"
    }else{
        return "void"
    }

}
console.log(final());
