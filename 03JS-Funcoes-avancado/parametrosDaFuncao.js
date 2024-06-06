// argumentos que sustenta todos os arumentos enviados
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 6, 7, 8);

const conta = (...args) => {
  console.log(args);
};
conta(1, 20, 30, 40, 50);
