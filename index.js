//Nome do Meu Heroi
let nomeHeroi = "Hernesto";

//Quantidade de XP que o Heroi possui
let xp = 9999;

//Analise de nível do personagem
let nivel = "";

//Avaliar o nível em que o Heroi está
if(xp < 1000){
    nivel = "Ferro";
}else if (xp < 2000){
    nivel = "Bronze";
}else if (xp < 5000){
    nivel = "Prata";
}else if (xp < 7000){
    nivel = "Ouro";
}else if (xp < 8000){
    nivel = "Platina";
}else if (xp < 9000){
    nivel = "Ascendente";
}else if (xp < 10000){
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}

//Mensagem de saída
console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);