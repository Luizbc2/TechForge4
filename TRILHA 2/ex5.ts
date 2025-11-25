export default class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionar(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listar(): string[] {
    return [...this.compromissos];
  }
}
