import { Component } from '@angular/core';
import { SimpleInterestService } from './simpleinterestservice';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  principal: number = 0.0;
  rate: number = 0.0;
  time: number = 0;
  si: number;
  constructor(public simpleInterestService: SimpleInterestService){

  }

  calculate(){
    this.si = this.simpleInterestService.calculateSI(this.principal, this.rate, this.time);
  }
}
