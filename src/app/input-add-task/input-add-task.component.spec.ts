import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddTaskComponent } from './input-add-task.component';

describe('InputAddTaskComponent', () => {
  let component: InputAddTaskComponent;
  let fixture: ComponentFixture<InputAddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
