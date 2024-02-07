// Função de prompt

// const nome = prompt("Qual o seu nome")
// const idade = prompt("Qual a sua idade ?")


// console.log(nome, idade)

// alert("Erro ao preencher o formulário")

// retornando o valor absoluto de 5
const abs = Math.abs(-5)
console.log(abs);

//arredondar 3.5 para inteiro mais próximo

const round = Math.round(3.5)
console.log(round);

//retornar a raiz quadrada de 16
const sqrt = Math.sqrt(16)
console.log(sqrt);
 
//Elevando 2 ao cubo

const pow = Math.pow(2,3);
console.log(pow)

// Exibindo uma mensagem de aviso no console
console.warn("Atenção: está é uma mensagem de aviso.")

// exibindo uma mensagem de erro no console
console.error("Ocorreu um erro")

// exibindo uma mensagem informativa no console
console.info("Essa é uma mensagem informativa")

// criando um grupo de mensagem no console
console.group("Mensagem de teste")
console.log("Esta é uma mensagem")
console.log("Esta é a outra mensagem de teste")
console.groupEnd()


//Continue no laço for 

for (let i = 1; i<=100; i++){
    //Pular a impressão do 5 
    if(i ===5 ){
        continue;
    }
    console.log(i);
}

// function
function multiplicar(num1, num2){
    return num1 * num2
}

console.log(multiplicar(3, 7))

//Arrow function

const multiplicar = (num1, num2)=> {
    return num1 * num2
}
console.log(multiplicar(3,7))

const a = multiplicar = (num1, num2)=> {
    return num1 * num2
}
console.log(multiplicar(3,7))

