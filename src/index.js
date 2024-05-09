const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomeHeroi;
let qtdXP;
let nivelHeroi;
let erro = false;

console.log("Olá viajante...\nEste é o início da sua aventura");

rl.question('Digite seu nome de Herói: ', (resposta) => {
    nomeHeroi = resposta;

    rl.question('Digite o seu nível de XP (Quantidade de experiência): ', (resposta) => {
        qtdXP = parseInt(resposta.replace(/[^0-9]/g, ''));

        if (qtdXP <= 1000) {
            nivelHeroi = "Ferro";
        } else if (qtdXP <= 2000) {
            nivelHeroi = "Bronze";
        } else if (qtdXP <= 5000) {
            nivelHeroi = "Prata";
        } else if (qtdXP <= 7000) {
            nivelHeroi = "Ouro";
        } else if (qtdXP <= 8000) {
            nivelHeroi = "Platina";
        } else if (qtdXP <= 9000) {
            nivelHeroi = "Ascendente";
        } else if (qtdXP >= 10000) {
            nivelHeroi = "Imortal";
        } else {
            console.log("Quantidade de XP informada inválida.\nNão será possível continuar nossa aventura!");
            erro = true;
        }

        if (!erro) {
            const msgHeroi = `O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`;
            console.log(msgHeroi);
        }

        rl.close();
    });
});
