function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  var valorEmEuro = valorEmDolarNumerico * 6;
  var valorEmBitcoin = valorEmDolarNumerico * 0.000021;
  var elementoValorConvertido1 = document.getElementById("valorConvertidoReal");
  var elementoValorConvertido2 = document.getElementById("valorConvertidoEuro");
  var elementoValorConvertido3 = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoReal = "O resultado em real é R$" + valorEmReal;
  var valorConvertidoEuro = "O resultado em euro é EUR" + valorEmEuro;
  var valorConvertidoBitcoin = "O resultado em bitcoin é BTC" + valorEmBitcoin;
  elementoValorConvertido1.innerHTML = valorConvertidoReal;
  elementoValorConvertido2.innerHTML = valorConvertidoEuro;
  elementoValorConvertido3.innerHTML = valorConvertidoBitcoin;
}