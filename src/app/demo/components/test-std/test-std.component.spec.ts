import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStdComponent } from './test-std.component';

describe('TestStdComponent', () => {
  let component: TestStdComponent;
  let fixture: ComponentFixture<TestStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestStdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
