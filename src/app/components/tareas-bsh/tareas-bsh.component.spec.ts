import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasBSHComponent } from './tareas-bsh.component';

describe('TareasBSHComponent', () => {
  let component: TareasBSHComponent;
  let fixture: ComponentFixture<TareasBSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasBSHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasBSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
