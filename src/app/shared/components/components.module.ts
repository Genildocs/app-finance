import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBudgetsComponent } from './card-budgets/card-budgets.component';
import { CardPotsComponent } from './card-pots/card-pots.component';
import { CardTransactionsComponent } from './card-transactions/card-transactions.component';
import { CardRecurringComponent } from './card-recurring/card-recurring.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    CardBudgetsComponent,
    CardPotsComponent,
    CardTransactionsComponent,
    CardRecurringComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [provideHttpClient()],
  exports: [
    CardBudgetsComponent,
    CardPotsComponent,
    CardTransactionsComponent,
    CardRecurringComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
