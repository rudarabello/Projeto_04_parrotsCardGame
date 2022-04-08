
let cardNumber;

initial()

function initial(){
    cardNumber = prompt("Olá, gostaria de iniciar o jogo com quantas cartas? \n (Apenas números par, entre 4 e 14 ok?)");
    if(cardNumber % 2 == 0 && cardNumber>=4 && cardNumber<=14){
        let count = 0;
        while(count<cardNumber){
            document.querySelector(".card").innerHTML;
            count++;
        } 
    }else{
        prompt("Apenas números par, entre 4 e 14 ok?")
        initial();
    }
    document.querySelector(".container.displaynone").add(".card");
    document.querySelector(".container.displaynone").remove(".displaynone");
    //dropcards();

}


function dropcards(cardNumber){

}

let minhaArray = [];

minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}