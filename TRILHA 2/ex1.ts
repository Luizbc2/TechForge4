export default class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}
