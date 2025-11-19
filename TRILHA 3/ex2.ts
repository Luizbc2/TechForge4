abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  constructor(public raio: number) { super(); }
  calcularArea(): number { return Math.PI * this.raio * this.raio; }
}

class Quadrado extends FiguraGeometrica {
  constructor(public lado: number) { super(); }
  calcularArea(): number { return this.lado * this.lado; }
}

class Triangulo extends FiguraGeometrica {
  constructor(public base: number, public altura: number) { super(); }
  calcularArea(): number { return (this.base * this.altura) / 2; }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach((f, i) => console.log(`Área da figura ${i + 1}: ${f.calcularArea()}`));
}

const figuras: FiguraGeometrica[] = [new Circulo(3), new Quadrado(4), new Triangulo(6, 3)];
imprimirAreas(figuras);
