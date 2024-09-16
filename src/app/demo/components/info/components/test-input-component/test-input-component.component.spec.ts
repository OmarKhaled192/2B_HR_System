import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputComponentComponent } from './test-input-component.component';

describe('TestInputComponentComponent', () => {
  let component: TestInputComponentComponent;
  let fixture: ComponentFixture<TestInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestInputComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
