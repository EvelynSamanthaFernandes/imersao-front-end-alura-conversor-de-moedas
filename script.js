function conversor() {
  let valor = parseFloat(document.getElementById("valor").value);
  if (isNaN(valor) || valor <= 0) {
    document.getElementById("mensagem").textContent =
      "Por favor, insira um valor válido!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  let taxaDolar = 5.65;
  let valorConvertido = valor / taxaDolar;

  document.getElementById(
    "resultado"
  ).innerText = `O valor convertido para Dólar é: $${valorConvertido.toLocaleString(
    "en-US",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  )}`;
}

function conversor1() {
  let valor = parseFloat(document.getElementById("valor").value);
  if (isNaN(valor) || valor <= 0) {
    document.getElementById("mensagem").textContent =
      "Por favor, insira um valor válido!";
    document.getElementById("mensagem").style.color = "red";
    return;
  }

  let taxaEuro = 6.41;
  let valorConvertido = valor / taxaEuro;

  document.getElementById(
    "resultado"
  ).innerText = `O valor convertido para Euro é: €${valorConvertido.toLocaleString(
    "de-DE",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  )}`;
}

function limparCampos() {
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("mensagem").innerHTML = "";
}
