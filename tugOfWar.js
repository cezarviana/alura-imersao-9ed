for(let round = 1; round <= 3; rodada++){
    console.log("Rodada: "+ round)
    
    let playerChoice = prompt("Nível " +round+", escolha o piso: 1, 2 ou 3.")
    let glassFloor = Math.floor(Math.random() * 3) + 1;
    
    //glassFloor quebrou;
    if(playerChoice == glassFloor){
        alert("O piso quebrou! Acabou o jogo para você")
        round = 1000;
    }else if(round == 0){
        alert("Parabéns! Você está vivo!")
    }else{
        alert("Você passou! Piso quebrado estava na ponte: " +glassFloor+ " Escolha o piso: 1, 2 ou 3.")
    }
}
