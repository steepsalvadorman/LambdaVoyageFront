import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersComponentComponent } from './offers-component.component';

describe('OffersComponentComponent', () => {
  let component: OffersComponentComponent;
  let fixture: ComponentFixture<OffersComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersComponentComponent]
    });
    fixture = TestBed.createComponent(OffersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
