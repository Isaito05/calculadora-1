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
  ress="";
  
  num1(){
    this.pant1 = this.pant1+ "1";
  }

  num2(){
    this.pant1 = this.pant1+ "2";
  }

  num3(){
    this.pant1 = this.pant1+ "3";
  }
  
  num4(){
    this.pant1 = this.pant1+ "4";
  }

  num5(){
    this.pant1 = this.pant1+ "5";
  }

  num6(){
    this.pant1 = this.pant1+ "6";
  }

  num7(){
    this.pant1 = this.pant1+ "7";
  }

  num8(){
    this.pant1 = this.pant1+ "8";
  }

  num9(){
    this.pant1 = this.pant1+ "9";
  }

  suma(){
    if(this.operador==""){
      this.operador="+";
      this. pant2 = this.pant1;
      this.pant1 = "";
    }
    else{
      this.operador="+";
    }
  }

  igual(){
    switch(this.operador){
      case "+":
      // this.ress=parseFloat(this.pant1)+parseFloat(this.pant2);
        this.pant2="";
        this.pant1=this.ress.toString();
        this.operador="";
        break;
      }
  }
}
