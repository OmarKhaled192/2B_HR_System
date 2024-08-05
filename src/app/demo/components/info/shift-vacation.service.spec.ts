import { TestBed } from '@angular/core/testing';

import { ShiftVacationService } from './components/custom/shift-vacation/shift-vacation.service';

describe('ShiftVacationService', () => {
  let service: ShiftVacationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftVacationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
