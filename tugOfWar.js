// criar lista com 3 personagens
let characters = ["", "", ""]

let vilains = ["", "", ""]

let charactersStrengh = 0
let vilainsStrengh = 0

alert("O array personagem contém: " + characters)

for(let i=0; i<3; i++){
    let charactersChoice = prompt("Digite o nome do seu personagem: "+(i+1));
    characters[i] = charactersChoice

    // Calcular a força de cada personagem, e depois somar pra saber a força do time
     
    charactersStrengh += Math.floor(Math.random() * 10) + 1 // === characterStrengh = characterStrengh + Math.floor(Math.random() * 10) + 1
}

console.log("Agora, o array personagem contém: " + characters)

console.log("Vilões iniciais: " + vilains)

for(let i=0; i<3; i++){
    randomIndex = Math.floor(Math.random() * 10);
    randomVilains = ["Coringa", "Darth Vader", "Drácula", "Hannibal Lecter", "Agent Smith", "Sauron", "Palpatine", "Scar", "Hans Gruber", "Hans Landa"]
    vilains[i] = randomVilains[randomIndex]

    // Calcular a força de cada personagem do time do computador

    vilainsStrengh += Math.floor(Math.random() * 10) + 1

}

console.log("Vilões: "+ vilains)

// Comparar os dois times para saber quem venceu

if(charactersStrengh > vilainsStrengh){
    alert("Seu time é muito forte! Vocês ganharam! Sua força foi: " + charactersStrengh)
}else if(charactersStrengh == vilainsStrengh){
    alert("Seus times possuem forças similares! Vocês empataram")
}else{
    alert("Seu time é fraco! Vocês perderam! A força dos vilões foi: " + vilainsStrengh)
}