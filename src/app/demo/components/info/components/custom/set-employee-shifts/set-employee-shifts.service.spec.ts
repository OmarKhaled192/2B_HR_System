import { TestBed } from '@angular/core/testing';

import { SetEmployeeShiftsService } from './set-employee-shifts.service';

describe('SetEmployeeShiftsService', () => {
  let service: SetEmployeeShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetEmployeeShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
