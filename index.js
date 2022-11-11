






const trocaCores = () => {
    document.body.classList.toggle('cores-alternativas');
};

const iniciar = () => {
    
    // setup
    const dataAtual = document.getElementById ('data-atual');
    dataAtual.innerText = (new Date()).toLocaleDateString('pt-BR');

    dataAtual.classList.add('destacado');

    // botao troca de cores
    const BotaoCores = document.getElementById('alternar-cores');

    // setInterval(trocaCores, 2000);

    BotaoCores.addEventListener('click', trocaCores);
};

document.addEventListener('DOMContentLoaded', iniciar);





// const iniciar = () => {
//     console.log("carregou essa porra de via arrow funciton");
// }

// document.addEventListener('DOMContentLoaded', iniciar);




// function xyz () {
//     console.log("Carregou");
// }

// const abc = () => {
//     console.log("carregou via arrow function");
// }

// document.addEventListener('DOMContentLoaded', xyz);


// const MeuParagrafoEuQueFiz = document.getElementById('modificado');

// console.log(MeuParagrafoEuQueFiz.innerText);
// MeuParagrafoEuQueFiz.innerText = 'buceta de vaca safada';
// console.log(MeuParagrafoEuQueFiz.innerText);