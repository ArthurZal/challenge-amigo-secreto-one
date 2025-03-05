let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');

    if (amigo.value.trim() == '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(amigo.value);

    amigo.value = '';

    exibirAmigos();
}

function exibirAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');

    listaDeAmigos.innerHTML = "";


    for (let i = 0; i < amigos.length; i++) {

        let listItem = document.createElement('li');
        listItem.textContent = amigos[i];
        listaDeAmigos.appendChild(listItem);
    }

}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length == 0) {
        alert('Sua lista de amigos está vazia.');
        return;
    }

    let indexAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indexAleatorio];

    console.log(indexAleatorio);

    resultado.textContent = amigoSorteado;

}


