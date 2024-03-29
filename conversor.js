
const button = document.getElementById('button');
const select = document.getElementById("select");

const dolar = 4.99
const euro = 5.40

converteValores = () => { // criamos uma variável que recebe uma função zero
    const inputReal = document.getElementById('input-real').value // o value puxa somente o valor digitado dentro do input

    const valorReal = document.getElementById('name-valor-real')
    const valorDolar = document.getElementById('name-valor-dolar')

    //valorReal.innerHTML = inputReal -- dessa forma também funciona, mas não iria aparecer a sigla das moedas
    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputReal);


if (select.value === 'US$ Dólar Americano' ){
    //valorDolar.innerHTML = inputReal / dolar -- dessa forma também funciona, mas não iria aparecer a sigla das moedas
    valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(inputReal / dolar)

} // caso a opção select for dólar, ira nos mostrar esse valor


if (select.value === '€ Euro' ){
    valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
        style:"currency",
        currency:"EUR"
    }).format(inputReal / euro);
} // caso a opção select for euro, ira nos mostrar esse valor


}

   
 //changeEvente o change é o evento de troca no select, onde quando for trocado as opções disponiveis, irá aparecer a formatação abaixo
 changeEvent = () => {
    const nameMoeda = document.getElementById('name-moeda')
    const imageMoeda = document.getElementById('image-moeda')

    
    if(select.value === 'US$ Dólar Americano'){
        nameMoeda.innerHTML = 'Dólar Americano'
        imageMoeda.src = "./img/EUA.png"
    }

    if(select.value === '€ Euro'){ //caso o valor seja euro, na tela onde está o dólar irá aparecer:
        nameMoeda.innerHTML = 'Euro' // nome Euro
        imageMoeda.src = "./img/euro.png" // imagem do icon Euro 
    }

    converteValores() // adicionamos essa função para que toda vez que tem uma troca de valor. além de chamarmos a função ChangeEvent, chamamos também a convertValores para além de trocar a imagem e o texto, mostrar também a conversão/calculo de valores de forma automática sem precisar adicionar o valor novamente no input 


}


button.addEventListener('click', converteValores); // o click é o evento chamado quando clicamos no button, e o converteValores é a função que determinamos acima
select.addEventListener('change', changeEvent );

