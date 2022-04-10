
let click1;
let click2;
let escolhas = 0;
let acertou = 0;
let elemento2;
let elementoArmazenado;
let checkElemento;
let lastClick = 0;
let delay = 1000;
let contador = 0;

function initial() {
    let verify = prompt(`Olá, gostaria de iniciar o jogo com quantas cartas? \n (Apenas números par, entre 4 e 14 ok?)`);
    if (verify % 2 === 0 && verify >= 4 && verify <= 14) {
        dropcards(verify);
    } else {
        prompt("Apenas números par, entre 4 e 14 ok?");
       window.location.reload();
    }

}


function dropcards(verify) {
    const gifs = ['bobrossparrot.gif', 'bobrossparrot.gif', 'explodyparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif',
        'fiestaparrot.gif', 'metalparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'revertitparrot.gif',
        'tripletsparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif', 'unicornparrot.gif']
    const randomGifs = [];
    let list = document.querySelector("li");
    for (let i = 0; i < verify; i++) {
        randomGifs.push(gifs[i]);
    }
    randomGifs.sort(function randomize() {
        return Math.random() - 0.5;
    })

    for (let j = 0; j < randomGifs.length; j++) {
        list.innerHTML += `
        <div class="card" onclick="chooseCard(this)">
                <div class="front-face face">
                    <img class="item" src="img/front.png">
                </div>
                <div class="back-face face">
                    <img class="item game" src="img/${randomGifs[j]}">
                </div>
            </div>
        `
    }
}


function chooseCard(elemento) {
    
    elemento.children[0].classList.add("flipped");
    elemento.children[1].classList.add("flipped");
        
    if (click1 === undefined) {
        escolhas++;
        click1 = elemento.children[1].querySelector(".game").src;

        elemento2 = elemento.querySelectorAll(".face");
        checkElemento = elemento.children;
        elementoArmazenado = elemento;
    } else {
        click2 = elemento.children[1].querySelector(".game").src;
        if (click1 == click2 && elemento.children !== checkElemento) {
            escolhas++;
            acertou++;
            elemento.onclick = "#";
            elementoArmazenado.onclick = "#";
            click1 = undefined;
            click2 = undefined;
        } else if (click1 != click2) {
            if (lastClick >= (Date.now() - delay)) {
                return;
            } else {
                setTimeout(function () {
                    escolhas++;
                    elemento2[0].classList.remove("flipped");
                    elemento2[1].classList.remove("flipped");
                    elemento.children[0].classList.remove("flipped");
                    elemento.children[1].classList.remove("flipped");

                    click1 = undefined;
                    click2 = undefined;
                }, 1000)
            }
        }
    }

    setTimeout(function () {
        fimDoJogo();
    }, 500);
    lastClick = Date.now();

}


function fimDoJogo() {
    let lista = document.querySelectorAll("li div");

    if (acertou == lista.length / 6) {
        alert(`Você ganhou em ${escolhas} jogadas! `);
        setTimeout(playAgain, 1000)
    }

}

function playAgain() {
    let check = prompt("Você gostaria de jogar novamente? (sim ou não)");
    if (check === 'sim') {
        initial()
        window.location.reload();
    } else if (check === 'não') {
        window.close();
    } 
}

initial()
dropcards()