import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsComponentComponent } from './destinations-component.component';

describe('DestinationsComponentComponent', () => {
  let component: DestinationsComponentComponent;
  let fixture: ComponentFixture<DestinationsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsComponentComponent]
    });
    fixture = TestBed.createComponent(DestinationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
