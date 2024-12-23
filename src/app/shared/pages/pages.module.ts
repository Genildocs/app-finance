import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { PotsComponent } from './pots/pots.component';
import { RecurringComponent } from './recurring/recurring.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  declarations: [
    HomeComponent,
    PotsComponent,
    BudgetsComponent,
    RecurringComponent,
    TransactionsComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
  exports: [
    HomeComponent,
    PotsComponent,
    BudgetsComponent,
    RecurringComponent,
    TransactionsComponent,
  ],
})
export class PagesModule {}
