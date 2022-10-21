import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primer-proyecto';
  constructor(){}
  
  pant1 = "";
  pant2 = "";
  operador="";
  pun = true;
  
  num1(){
    this.pant1 = this.pant1 + "1";
  }

  num2(){
    this.pant1 = this.pant1 + "2";
  }

  num3(){
    this.pant1 = this.pant1 + "3";
  }
  
  num4(){
    this.pant1 = this.pant1 + "4";
  }

  num5(){
    this.pant1 = this.pant1 + "5";
  }

  num6(){
    this.pant1 = this.pant1 + "6";
  }

  num7(){
    this.pant1 = this.pant1 + "7";
  }

  num8(){
    this.pant1 = this.pant1 + "8";
  }

  num9(){
    this.pant1 = this.pant1 + "9";
  }

  num0(){
    this.pant1 = this.pant1 + "0";
  }

  suma(){
    this.pant2=this.pant1;
    this.pant1="";
    this.operador="+";
    this.pun = true;
  }

  resta(){
    this.pant2=this.pant1;
    this.pant1="";
    this.operador="-";
    this.pun = true;
  }

  mul(){
    this.pant2=this.pant1;
    this.pant1="";
    this.operador="*";
    this.pun = true;
  }

  div(){
    this.pant2=this.pant1;
    this.pant1="";
    this.operador="/";
    this.pun = true;
  }

  porc(){
    this.pant2=this.pant1;
    this.pant1="";
    this.operador="%";
  }

  borrarC(){
    this.pant1="";
    this.pant2="";
  }

  borrarCE(){
    this.pant1="";
  }
  
  borrarUNO(){
    this.pant1; 
    let nueva = "";
    for( let i=0; i<this.pant1.length-1; i++){
      nueva = nueva + this.pant1[i];
    }
    this.pant1 = this.pant1 = nueva
  }

  decimal(){
    if(this.pun == true){
      this.pant1 = this.pant1 + ".";
      this.pun = false;
    }
  }

  igual(){
    let valor1=Number(this.pant1);
    let valor2=Number(this.pant2);

  if(this.operador =="+"){
    this.pun = false;
    let suma = Number(valor1) + Number(valor2);
    this.pant1 = suma.toString();
  }else if(this.operador=="-"){
    this.pun = false;
    let resta = Number(valor2) - Number(valor1);
    this.pant1 = resta.toString();
  }else if(this.operador=="*"){
    this.pun = false;
    let multiplicacion = Number(valor1) * Number(valor2);
    this.pant1 = multiplicacion.toString();
  }else if(this.operador=="/"){
    this.pun = false;
    let division = Number(valor2) / Number(valor1);
    this.pant1 = division.toString();
  }else if(this.operador=="%"){
    this.pun = false;
    let raiz = valor1 =  (valor1) * (valor2) / 100;
    this.pant1 = raiz.toString();
  }
  }
}


