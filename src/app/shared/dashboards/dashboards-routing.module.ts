import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotsComponent } from './dashboard/pots/pots.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { BudgetsComponent } from './dashboard/budgets/budgets.component';
import { RecurringComponent } from './dashboard/recurring/recurring.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        title: 'Overview',
        component: OverviewComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
