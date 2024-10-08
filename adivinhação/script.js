let numeroSecreto = parseInt(Math.random() * 11);

const chutar = () => {
  let elementoResultado = document.querySelector("#resultado");
  let chute = parseInt(document.querySelector("#valor").value);

  if (chute === numeroSecreto) {
    alert("ACERTÔ MIZERAVI");
  } else if (chute < 0 || chute > 10) {
    alert("Número invalido! Você deve inserir um número de 0 a 10");
  } else {
    alert("ERROOOOOOOOUU!!");
  }

  let valorInput = document.querySelector("#valor");
  valorInput.value = "";
  valorInput.focus();
};

