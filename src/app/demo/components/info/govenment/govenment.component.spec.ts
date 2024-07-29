import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovenmentComponent } from './govenment.component';

describe('GovenmentComponent', () => {
  let component: GovenmentComponent;
  let fixture: ComponentFixture<GovenmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovenmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
