
// 1- Perguntar é maior de idade?:
const idade = prompt("Insira a sua idade:")
// 2- Se sim, ficar , se não sair:
if (idade < 18) {
    alert("Go Away!")
}

if (idade >= 18) {
    const nome = prompt("Digite seu nome:");
    let escolhaJogador = prompt("Digite: 1-Pedra, 2-Papel ou 3-Tesoura").toLowerCase();
    let escolhaComputador = Math.floor(Math.random() * 3) + 1; // 1, 2 ou 3;

    // J Pedra, C Pedra; Papel, Tesoura e idem;
    if (escolhaJogador == escolhaComputador) {
        alert("Empate!")
    }
    if (escolhaJogador == 1) {
        // J Pedra, C Papel --> C Vence!
        if (escolhaComputador == 2) {
            alert("Computador Venceu! Computador escolheu Papel!")
        }
        // J Pedra, C Tesoura --> J Vence!
        if (escolhaComputador == 3) {
            alert(nome + " Vence! Computador escolheu Tesoura!")
        }
    }
    if (escolhaJogador == 2) {
        // J Papel, C Pedra --> J Vence!
        if (escolhaComputador == 1) {
            alert(nome + " Vence! Computador escolheu Pedra!")
        }
        // J Papel, C Tesoura --> C Vence!
        if (escolhaComputador == 3) {
            alert("Computador Vence! Computador escolheu Tesoura!")
        }
    }
    if (escolhaJogador == 3) {
        // J Tesoura, C Pedra --> C Vence!
        if (escolhaComputador == 1) {
            alert("Computador Vence! Computador escolheu Pedra!")
        }
        // J Resoura, C Papel --> J Vence!
        if (escolhaComputador == 2) {
            alert(nome + " Vence! Computador escolheu Papel!")
        }
    }

    alert("Escolha do Computador: " + escolhaComputador)
}
