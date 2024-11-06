import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})

export class TablaMultiplicarComponent {
  @ViewChild("cajanumero") cajaNumeroRef: ElementRef;
  public tabla: Array<{ operacion: string, resultado: number }>;

  constructor() {
    this.cajaNumeroRef = new ElementRef(0);
    this.tabla = [];
  }

  multiplicarNumero() {
    this.tabla = [];  // Limpiar la tabla antes de calcular

    for (let i = 0; i <= 10; i++) {

      let resultado = this.cajaNumeroRef.nativeElement.value * i;

      this.tabla.push({
        operacion: this.cajaNumeroRef.nativeElement.value + "*" + i,
        resultado: resultado
      });
    }
  }
}
