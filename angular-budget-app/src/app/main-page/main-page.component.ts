import { Component, OnInit } from '@angular/core';
import { BudgetList } from 'src/controller/model/budget-list.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetList[] = new Array<BudgetList>();

  constructor() { }

  ngOnInit(): void {
  }

  addBudgetItem(newBudget: BudgetList) {
    this.budgetItems.push(newBudget);
  }

}
