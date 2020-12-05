import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleInterestService  {
  
  calculateSI(p: number, r: number, t: number){
    return p*r*t/(100*12); 
    // because time is in months, we need to divide by 12 
  }

}
