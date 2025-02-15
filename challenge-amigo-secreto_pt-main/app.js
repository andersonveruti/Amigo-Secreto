//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosParticipantes = []

function adicionarAmigo(){
    let nomeInput = document.getElementById('nome-amigo').value.toUpperCase().trim(); //Busca valor do input o trim é para eliminar espaços vazios
    if(amigosParticipantes.includes(nomeInput)){
        alert('Nome repetido');
    }
    else if(nomeInput == '' ){
        alert('Nome vazio, gentileza adicionar um nome válido');
    }
    else{
        amigosParticipantes.push(nomeInput); //adiciona input à lista
        document.querySelector('.name-list').innerHTML = `<p id="listaAmigos">${amigosParticipantes}</p>`;//adiciona a lista no front no campo Amigos incluídos
    }
    document.getElementById('nome-amigo').value = '';//limpa o campo input
}

function sortearAmigo(){

    if(amigosParticipantes.length <= 3){
        alert('Adicione mais participantes para deixar o jogo mais legal !!!');
    }
    else{
        let nomesFront = document.querySelector('.result-list');
        let amigosAleatorio = amigosParticipantes.sort(() => Math.random() - 0.5);
    
        for (let i = 0; i < (amigosAleatorio.length); i++){
            if((amigosAleatorio.length -1) == i){
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="resultadoSorteio">${amigosAleatorio[i]} --> ${amigosAleatorio[0]}</p>`;
            }
            else{
                nomesFront.innerHTML = nomesFront.innerHTML + `<p id="resultadoSorteio">${amigosAleatorio[i]} --> ${amigosAleatorio[i+1]}</p>`;
            }
        }
    }
}

function reiniciar(){
    amigosParticipantes = []
    document.querySelector('.result-list').textContent = '';
    document.querySelector('.name-list').innerHTML = `<p id="listaAmigos"></p>`;
}