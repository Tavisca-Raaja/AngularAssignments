import {Component} from '@angular/core';


@Component({
    selector :'app-calculator',
    templateUrl :'./calculator.component.html',
    styleUrls:[]

})

export class CalculatorComponent{

    inputValue:string;
    lastOperation : string;
    constructor() {
        this.inputValue = '0';
        this.lastOperation = '=';
    }

    display(event):void{
       
        if(this.lastOperation === '=')
          {
              this.inputValue = '';
              this.lastOperation = '';
          }

       this.inputValue +=event.target.value;
    }

    clear():void{
        this.inputValue ='';
    }

    calculate()
    {
        this.inputValue = eval(this.inputValue);
        this.lastOperation = '=';
    }
}