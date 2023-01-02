//trocar o tema da página
'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){

    let btnImg = document.querySelector('#btnImg');
    let colorTheme = document.querySelector("#body");

    var className = document.body.className;
    if(className == "light-theme"){
        colorTheme.classList.remove("light-theme");
        colorTheme.classList.add("dark-theme");
        btnImg.setAttribute('src', './img/sun.png');
    } else{
        colorTheme.classList.remove("dark-theme");
        colorTheme.classList.add("light-theme");
        btnImg.setAttribute('src', './img/moon.png');
    }
    console.log('current class name: ' + className);
});


//atribuição dos botões de submit em variáveis
const btnSoma = document.querySelector('#somar');
const btnSub = document.querySelector('#subtrair');
const btnMulti = document.querySelector('#multiplicar');
const btnDivi = document.querySelector('#dividir');
//div de resultado
let resultado = document.querySelector('.resultado');

//função de cada operação
function somar(n1, n2){
    return n1 + n2;
}
function subtrair(n1, n2){
    return n1 - n2;
}
function multiplicar(n1, n2){
    return n1 * n2;
}
function dividir(n1, n2){
    return n1 / n2;
}


//operação ao clique
if(btnSoma){

    btnSoma.addEventListener('click', calcular);
    function calcular(e){
        
        e.preventDefault();
        
        const num1 = document.querySelector('#n1');
        const num1Value = num1.value;
        const num2 = document.querySelector('#n2');
        const num2Value = num2.value;

        if(num1Value == '' || num2Value == ''){
            alert("Preencha todos os campos!")
        } else if (!(num1Value == '' || num2Value == '')){
            console.log(somar(Number(num1Value), Number(num2Value)));
    
            const resulFinal = somar(Number(num1Value), Number(num2Value));
    
            resultado.innerHTML = `O resultado é: ${resulFinal}`;
        }


    };
}

if(btnSub){

    btnSub.addEventListener('click', calcular);
    function calcular(e){
        
        e.preventDefault();
        
        const num1 = document.querySelector('#n1');
        const num1Value = num1.value;
        const num2 = document.querySelector('#n2');
        const num2Value = num2.value;

        if(num1Value == '' || num2Value == ''){
            alert("Preencha todos os campos!")
        } else if (!(num1Value == '' || num2Value == '')){
            console.log(subtrair(Number(num1Value), Number(num2Value)));
    
            const resulFinal = subtrair(Number(num1Value), Number(num2Value));
    
            resultado.innerHTML = `O resultado é: ${resulFinal}`;
        }

    };
}

if(btnMulti){

    btnMulti.addEventListener('click', calcular);
    function calcular(e){
        
        e.preventDefault();
        
        const num1 = document.querySelector('#n1');
        const num1Value = num1.value;
        const num2 = document.querySelector('#n2');
        const num2Value = num2.value;
        if(num1Value == '' || num2Value == ''){
            alert("Preencha todos os campos!")
        } else if (!(num1Value == '' || num2Value == '')){
        console.log(multiplicar(Number(num1Value), Number(num2Value)));

        const resulFinal = multiplicar(Number(num1Value), Number(num2Value));

        resultado.innerHTML = `O resultado é: ${resulFinal}`;
        }
    };
}
if(btnDivi){

    btnDivi.addEventListener('click', calcular);
    function calcular(e){
        
        e.preventDefault();
        
        const num1 = document.querySelector('#n1');
        const num1Value = num1.value;
        const num2 = document.querySelector('#n2');
        const num2Value = num2.value;
        if(num1Value == '' || num2Value == ''){
            alert("Preencha todos os campos!")
        } else if (!(num1Value == '' || num2Value == '')){
        console.log(dividir(Number(num1Value), Number(num2Value)));

        const resulFinal = dividir(Number(num1Value), Number(num2Value));

        resultado.innerHTML = `O resultado é: ${resulFinal.toFixed(2)}`;
        }
    };
    
}

//limpar os dígitos
function limpar(){
    location.reload();
}
