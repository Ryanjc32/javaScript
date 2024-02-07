// Array 
const array = ["João","Maria","José"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// Add elemento ao array
const listaNomes = ["João","Maria"];

listaNomes.push("beatriz");
console.log(listaNomes);


// Remover um elemento do array
listaNomes.pop();
console.log(listaNomes);

// Remover um elemento específico do array
const arrayNomes = ["João","Maria","José"];
console.log(arrayNomes);

arrayNomes.splice(1,1);
console.log(arrayNomes)

// alterando um elemnto do array
const arrayNomes2 = ["João","Maria","José"];
console.log(arrayNomes2);

arrayNomes2[0] = "Pedro"; //arrayNomes2.splice(0,1,"Pedro");
console.log(arrayNomes2);

// Percorrendo o array com loop for
const listNome = ["Cleber","Lucão","Marcão"];

for(i = 0; i < listNome.length; i++){
    console.log(listNome[i])
}

// Percorrer o array com loop forEach
const arrayList = ["Manu","Sarah","Bia"];

arrayList.forEach((nome) =>{
    console.log(nome)
});

// concatenar dois arrays
const numeros = [6,7,8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);

// shift
const nomes = ["João","Maria","José"] // tirar o primeiro nome

const primeiroNome = nomes.shift();
console.log(nomes);

// unshift
const numerosTeste = [1, 2, 3];

numerosTeste.unshift(8); // adicionar no começo
console.log(numerosTeste);

// indexOf
const frutas2 = ["maça","banana","manga","abacaxi"]; // Verificar se tem na lista
console.log(frutas2.indexOf("maça"));
console.log(frutas2.indexOf("abacaxi"));
console.log(frutas2.indexOf("laranja"));

// lastindexOf
const letras = ["a","b","c","d","e"];

console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

// slice
const testandoSlice = ["a","b","c","d","e","f"];

const subArray = testandoSlice.slice(2,4);

console.log(testandoSlice);
console.log(subArray);

// Buscando um array via slice numa posição inexistente
const subArray2 = testandoSlice.slice(10, 15);
console.log(subArray2);

// Includes
const frutasDona = ["maçã","banana","laranja"];

const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melância");
console.log(temMaca)
console.log(temMelancia)

// Includes à partir de uma posição 
const letrasNovo = ["a","b","c","d","a"];

const temApos2 = letrasNovo.includes("a",2)
console.log(temApos2)

// reverse
const testandoReverse = [1,2,3,4,5];

testandoReverse.reverse();
console.log(testandoReverse)

// spread
const testandoSpread = ["a","b","c","d","e"];

const novaLetras = [...testandoSpread].reverse();
console.log(testandoSpread)
console.log(novaLetras)

// uppercase
const fraseA = "Boas vindas!"
const upper = fraseA.toUpperCase(); // deixar tudo maiusculo
console.log(upper)

//Lowercase 
const fraseB = "Boas vindas!"
const lower = fraseB.toLowerCase(); // deixar tudo minusculo
console.log(lower)