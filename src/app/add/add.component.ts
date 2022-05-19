import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ls:LoanService) { }
  public loanForm=new FormGroup({
    loanId:new FormControl(),
    loanCustomerName:new FormControl(),
    loanAmount:new FormControl(0),
    dateOfLoan:new FormControl(),
    tenure:new FormControl(0),
    rateOfInterest:new FormControl(0)

  })

  ngOnInit() {
  }
  
  add(){
    this.ls.addLoan(this.loanForm.value)
  }

}
