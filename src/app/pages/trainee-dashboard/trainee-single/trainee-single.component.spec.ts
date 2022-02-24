import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSingleComponent } from './trainee-single.component';

describe('TraineeSingleComponent', () => {
  let component: TraineeSingleComponent;
  let fixture: ComponentFixture<TraineeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
