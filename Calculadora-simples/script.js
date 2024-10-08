const selectOperacao = document.getElementById('select-operacao');
const btnCalcular = document.getElementById('btn-calcular');
const divRoot = document.getElementById("root");
const textResultado = document.createElement("h3");
divRoot.appendChild(textResultado);

btnCalcular.addEventListener('click', (event) => {
  event.preventDefault(); 

  // ENTRADA
  // Captura os valores dos dois números via prompt()
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));


  const operacao = selectOperacao.value;
  
  let resultado;

  switch (operacao) {
    case 'somar':
      resultado = num1 + num2;
      break;
    case 'subtrair':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
    case 'dividir':
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = 'Erro: Divisão por zero!';
      }
  }

  // Mostra o resultado na página
  textResultado.textContent = `Resultado: ${resultado}`;
});
