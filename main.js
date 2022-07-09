

const tela1 = document.getElementById('tela');

const botao = document.getElementsByClassName('botoes')


const numeros = [];
function exibeTela(){
    for(var cont = 0 ; cont < 3;cont++){
        tela1.innerHTML = `${cont}`
    }

}

botao.addEventListener('click',exibeTela)
