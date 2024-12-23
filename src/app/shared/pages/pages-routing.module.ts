import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PotsComponent } from './pots/pots.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { RecurringComponent } from './recurring/recurring.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'pots',
    title: 'Pots',
    component: PotsComponent,
  },
  {
    path: 'transactions',
    title: 'Transactions',
    component: TransactionsComponent,
  },
  {
    path: 'budgets',
    title: 'Budgets',
    component: BudgetsComponent,
  },
  {
    path: 'recurring',
    title: 'Recurring',
    component: RecurringComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
