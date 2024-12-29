import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { BudgetsComponent } from './dashboard/budgets/budgets.component';
import { DashboardsRoutingModule } from './dashboards-routing.module';

import { PotsComponent } from './dashboard/pots/pots.component';
import { RecurringComponent } from './dashboard/recurring/recurring.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
@NgModule({
  declarations: [
   
    PotsComponent,
    BudgetsComponent,
    RecurringComponent,
    TransactionsComponent,
    DashboardComponent,
    OverviewComponent,
  ],
  imports: [CommonModule, DashboardsRoutingModule, ComponentsModule],
  exports: [
  
    PotsComponent,
    BudgetsComponent,
    RecurringComponent,
    TransactionsComponent,
  ],
  bootstrap: [],
})
export class DashboardsModule {}
