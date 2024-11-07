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

// FORMA PROFESOR
// import { Component, ViewChild, ElementRef } from '@angular/core'; 

// @Component({ 
//  selector: 'app-tablamultiplicar', 
//  templateUrl: './tablamultiplicar.component.html',
//  styleUrl: './tablamultiplicar.component.css' 
// }) 

// export class TablamultiplicarComponent { 
//  @ViewChild("cajanumero") cajaNumeroRef! : ElementRef; 
//  public numeros: Array<number>; 
//  public numero: number; 

//  constructor() { 
//   this.numeros = new Array<number>(); 
//   this.numero = 0; 
//  } 

//  mostrarTabla(): void { 
//   this.numero = parseInt(this.cajaNumeroRef.nativeElement.value); 
//   let aux = new Array<number>(); 
//   for (var i = 1; i <= 10; i++){ 
//    var resultado = this.numero * i; 
//    aux.push(resultado); 
//   } 
//   this.numeros = aux; 
//  } 
// } 

 