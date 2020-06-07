export default class NumberToReal {
  static formatNumberToString(numero) {
    let numeroFormatado = new Number(numero).toFixed(2).split('.');
    numeroFormatado[0] =
      'R$ ' + numeroFormatado[0].split(/(?=(?:...)*$)/).join('.');
    return numeroFormatado.join(',');
  }

  static formatStringToReal(string) {
    let numeroFormatado = string.split('.');
    numeroFormatado[0] =
      'R$ ' + numeroFormatado[0].split(/(?=(?:...)*$)/).join('.');
    return numeroFormatado.join(',');
  }
}
