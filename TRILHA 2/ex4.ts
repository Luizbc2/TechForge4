export default class Temperatura {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return this.valor * 9 / 5 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}
