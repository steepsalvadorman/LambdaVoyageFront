import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponentComponent } from './seats-component.component';

describe('SeatsComponentComponent', () => {
  let component: SeatsComponentComponent;
  let fixture: ComponentFixture<SeatsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatsComponentComponent]
    });
    fixture = TestBed.createComponent(SeatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
