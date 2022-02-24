import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeJobAppComponent } from './trainee-job-app.component';

describe('TraineeJobAppComponent', () => {
  let component: TraineeJobAppComponent;
  let fixture: ComponentFixture<TraineeJobAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeJobAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeJobAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
