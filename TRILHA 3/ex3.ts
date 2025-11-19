class Pagamento {
  processar(): void { console.log('Processando pagamento genérico'); }
}

class PagamentoCartao extends Pagamento {
  constructor(public numeroCartao: string) { super(); }
  private validarNumero(): boolean { const apenasDigitos = this.numeroCartao.replace(/\s+/g, ''); return /^\d{16}$/.test(apenasDigitos); }
  processar(): void {
    if (!this.validarNumero()) { console.log('Número do cartão inválido:', this.numeroCartao); return; }
    console.log('Pagamento com cartão processado para cartão:', this.numeroCartao);
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const numero = Math.floor(Math.random() * 1e10).toString();
    const codigo = '2379' + ('0000000000' + numero).slice(-10);
    console.log('Boleto gerado. Código:', codigo);
  }
}

const pagamentos: Pagamento[] = [new PagamentoCartao('1234567890123456'), new PagamentoCartao('1111 2222 3333'), new PagamentoBoleto()];
pagamentos.forEach(p => p.processar());
