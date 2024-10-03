import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmployeeShiftsComponent } from './set-employee-shifts.component';

describe('SetEmployeeShiftsComponent', () => {
  let component: SetEmployeeShiftsComponent;
  let fixture: ComponentFixture<SetEmployeeShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetEmployeeShiftsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetEmployeeShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
