// Object literais

const objetopessoa = {
    nome: "João",
    idade: 30
}

console.log(objetopessoa.nome)
console.log(objetopessoa)
console.log(typeof objetopessoa)

const pessoa ={
    nome: "Morgana",
    idade:40
}

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa)

// Adicionando uma propriedade ao objeto

const funcionario = {
    nome: "Luís",
    matricula: 334567
}

console.log(funcionario)
funcionario.sobrenome = "Santana"
console.log(funcionario)

// método assign
const objeto1 ={
    nome:"joão",
    idade: 25
};

const objeto2 = {
    altura : 1.80,
    genero: "masculino"
};

const objetoDestino = {};
 Object.assign(objetoDestino, objeto1, objeto2)
console.log(objetoDestino);

// método Keys

const objeto = {
    nome:"Joaquim",
    idade:21
};

const chaves = Object.keys(objeto);
console.log(chaves);

// mutação - atribuição
const hospede = {
    nome:"Alberto"
};

hospede.nome = "Junior"
console.log(hospede);

// mutação - inserção
hospede.sobrenome = "Lima"
console.log(hospede);

// Mutação -operador de adição
const hospedeNovo = {
    nome:"Mariana",
    idade: 56
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);

// mutação - deletar
delete hospedeNovo.nome;
console.log(hospedeNovo);

// Método string: trim
const textoEspacado = "Essa string com espaços em branco"
const textoSemEspaco =textoEspacado.trim();
console.log(textoSemEspaco)

// padStart

const numero = "1234";

// Preencher com zeros para atingir 8 caracteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";
// preecher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-")
console.log(codigoPreenchido);

// split
const texto = "Essa é uma string com espaços em branco";

// Divide a string em um array de letras , usando espaços como separadores
const letras = texto.split("");
console.log(letras);

// Divide a string em um array de números usando virgulas como separadores
const numeros2 = "1,2,3,4,5".split(",")
console.log(numeros2)

// Divide o texto em string separadas por palavras
 const partes = texto.split("", 8);
 console.log(partes);



// join 
const numerosJoin = [1, 2, 3, 4, 5];
// transforma o array em uma string, acrescentando a vírgula
const listaNumeros = numerosJoin.join();
console.log(numerosJoin);
console.log(listaNumeros);
console.log(typeof listaNumeros);

// Transforma o array em uma string, com traços como separador
const listaNumerosTracos = numerosJoin.join("-")
console.log(listaNumerosTracos);

// Junta os elementos de um array em string e acrescenta um elemento de string
const frutas = ["Maça", "Banana", "laranja"]
const textFrutas = frutas.join(" e ")
console.log(textFrutas);

// repeat
const testandoRepeat = " Olá"

// repetindo a string 3 vezes
const textoRepetido = testandoRepeat.repeat(3);
console.log(textoRepetido);

// Repetindo a string 0 vezes
const textoVazio = testandoRepeat.repeat(0);
console.log(textoVazio)

// rest operator
function minhaFuncao (a, b, ...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
minhaFuncao(1, 2, 3, 4, 5);

// iterando sobre um array
const frutasA = ["maça", "uva", "melância"];

for(const fruta of frutasA){
    console.log(fruta)
}

// desestruturando objetos
const usuario ={
    primeiroNome: "José",
    sobrenome: "Xavier",
    profissao: "Pedreiro"
}

const [primeiroNome, sobrenome, profissao] = Object.values(usuario);
console.log(primeiroNome,sobrenome,profissao);

// desestruturando array

const array = ["João", "Maria", "Pedro"];

const [primeiro,segundo,terceiro] = Object.values(array);
console.log(primeiro,segundo);

const [quarto,quinto,sexto] = array;
console.log(quarto,quinto);