abstract class Funcionario {
  constructor(private nome: string, private salario: number) {}
  getNome(): string { return this.nome; }
  getSalario(): number { return this.salario; }
  abstract calcularBonus(): number;
  salarioComBonus(): number { return this.salario + this.calcularBonus(); }
}

class Gerente extends Funcionario { calcularBonus(): number { return this.getSalario() * 0.10; } }
class Operario extends Funcionario { calcularBonus(): number { return this.getSalario() * 0.05; } }

function calcularSalarioComBonus(funcionarios: Funcionario[]): void { funcionarios.forEach(f => console.log(`${f.getNome()}: Salário base ${f.getSalario()}, Salário com bônus ${f.salarioComBonus()}`)); }

const funcionarios: Funcionario[] = [new Gerente('Ana', 10000), new Operario('José', 3000)];
calcularSalarioComBonus(funcionarios);
