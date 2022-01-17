let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul
//4 - laranja
//5 - roxo

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 6);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    } else if (color == 4) {
        return orange ;
    } else if (color == 5) {
        return purple;
}}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis 6 cores! Iniciando jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
orange.onclick = () => click(4);
purple.onclick = () => click(5);


//inicio do jogo
playGame();