let saldoVitorias = calcularNivel(50, 5);
let nivel = encontrarNomeNivel(saldoVitorias);
mostrarNivel(saldoVitorias, nivel);

function encontrarNomeNivel(saldo) {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "lendario";
  } else {
    return "Imortal";
  }
}
function calcularNivel(vitorias, derrotas) {
  let subtracao = vitorias - derrotas;
  return subtracao;
}
function mostrarNivel(saldo, nivel) {
  console.log("O herói tem saldo de " + saldo + " e está no nivel de " + nivel);
}
