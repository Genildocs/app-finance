import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecurringComponent } from './card-recurring.component';

describe('CardRecurringComponent', () => {
  let component: CardRecurringComponent;
  let fixture: ComponentFixture<CardRecurringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardRecurringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRecurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
