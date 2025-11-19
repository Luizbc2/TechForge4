class Animal {
  private energia: number;
  constructor(energiaInicial = 100) { this.energia = energiaInicial; }
  protected alterarEnergia(delta: number): void { this.energia += delta; if (this.energia < 0) this.energia = 0; }
  comer(quantidade = 10): void { this.alterarEnergia(quantidade); }
  statusEnergia(): void { const nome = (this.constructor as any).name || 'Animal'; console.log(`${nome} energia: ${this.energia}`); }
}

class Leao extends Animal {
  cacar(): void { console.log('Leão está caçando: gasta energia...'); this.alterarEnergia(-40); this.comer(50); this.statusEnergia(); }
}

class Passaro extends Animal {
  alimentar(): void { console.log('Pássaro se alimentando...'); this.comer(15); this.statusEnergia(); }
}

const leao = new Leao(120);
const passaro = new Passaro(50);
leao.cacar();
passaro.alimentar();
