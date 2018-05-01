import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title= 'Calculadora';
  valor2:number=0;
  valor1:number=0; 
  total:number=0;  


   
suma():void { 
    this.total=(this.valor1-0)+(this.valor2-0);
 } 
 resta():void { 
  this.total=this.valor1-this.valor2;
} 
multiplicar():void { 
  this.total=this.valor1*this.valor2;
} 
dividir():void { 
  this.total=this.valor1/this.valor2;
} 


  constructor() { }

  ngOnInit() {
  }

}
