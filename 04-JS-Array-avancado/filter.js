// Filter, map, reduce

// Retorne os números maioresque 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//// Jeito longo de fazer
// function callbackFilter(valor, indice, array) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// numerosMaiores10 = numeros.filter(callbackFilter);
// console.log(numerosMaiores10);

//// Jeito curto e recomendado de fazer
const numerosMaiores10 = numeros.filter((valor) => valor > 10);
console.log(numerosMaiores10);
//
//
//
//
//
//
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosada", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

// Retorne as pessoas com mais de 50 anos
const pessoasComMais50idade = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasComMais50idade);

// Retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(nomeTerminaComA);
