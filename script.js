const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let labirinto = document.getElementById('labirinto');
labirinto.classList.add('labirinto');

function criaCaminho(arr) {

    for(let linha = 0; linha < arr.length; linha++) {
        let divLinha = document.createElement('div');
        divLinha.style.display = 'flex';
        labirinto.appendChild(divLinha);

        for(let coluna = 0; coluna < arr[linha].length; coluna++) {
            let divColuna = document.createElement('div');
            divColuna.dataset.key = (`${linha}${coluna}`);
            divLinha.appendChild(divColuna);
            
            if(arr[linha][coluna] === 'W') {
                divColuna.classList.add('parede');
            } else {
                divColuna.classList.add('caminho');
            }

        }

    }
}

criaCaminho(map);

let nick = document.createElement('div')
nick.classList.add('nick')
document.querySelector("div[data-key='90']").appendChild(nick)
let vertical = 9
let horizontal = 0

function winningCase(){
    let texto = document.getElementById('texto');
    if(nick.parentElement.dataset.key === '820'){
        texto.classList.remove('display');
    } else {
        texto.classList.add('display');
    }
}

document.addEventListener('keydown', (event) => {

    const keyName = event.key;
    if(keyName === 'ArrowUp' && vertical < 14) {
        vertical = vertical - 1;
    }
    if(keyName === 'ArrowDown' && vertical > 1) {
        vertical = vertical + 1;
    }
    if(keyName === 'ArrowLeft' && horizontal > 1) {
        horizontal = horizontal - 1;
    }
    if(keyName === 'ArrowRight' && horizontal < 20) {
        horizontal = horizontal + 1;
    }

    if(document.querySelector(`div[data-key='${vertical}${horizontal}']`).className === 'caminho') {
        document.querySelector(`div[data-key='${vertical}${horizontal}']`).appendChild(nick)
    } else {
        if(keyName === 'ArrowUp' && vertical < 14) {
            vertical = vertical + 1;
        }
        if(keyName === 'ArrowDown' && vertical > 1) {
            vertical = vertical - 1;
        }
        if(keyName === 'ArrowLeft' && horizontal > 1) {
            horizontal = horizontal + 1;
        }
        if(keyName === 'ArrowRight' && horizontal < 20) {
            horizontal = horizontal - 1;
        }
    }
    winningCase();
});