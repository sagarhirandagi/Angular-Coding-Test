import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  public loans=[];

  addLoan(loan){
    this.loans.push(loan);
    console.log(this.loans);
    
  }

  getAllLoan(){
    return this.loans;
  }

 

  deleteLoan(loanId){
    for(let i=0;i<this.loans.length;i++){
      if(this.loans[i].id==loanId){
         this.loans.splice(i,1);
      }
    }
  }

  computeInterestAmount(){
    return this.computeInterestAmount;
  }

  computeEMI(){
    return this.computeEMI;
  }
}
