import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverInfoComponent } from './deliver-info.component';

describe('DeliverInfoComponent', () => {
  let component: DeliverInfoComponent;
  let fixture: ComponentFixture<DeliverInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
