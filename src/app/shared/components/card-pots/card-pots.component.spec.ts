import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPotsComponent } from './card-pots.component';

describe('CardPotsComponent', () => {
  let component: CardPotsComponent;
  let fixture: ComponentFixture<CardPotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
