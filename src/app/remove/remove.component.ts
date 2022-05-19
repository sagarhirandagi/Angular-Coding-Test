import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor( private ls:LoanService) { }

  ngOnInit() {
  }

  remove(loanId){
    this.ls.deleteLoan(loanId);
    
  }

}
