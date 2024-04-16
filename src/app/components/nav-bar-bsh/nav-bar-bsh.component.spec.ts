import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBSHComponent } from './nav-bar-bsh.component';

describe('NavBarBSHComponent', () => {
  let component: NavBarBSHComponent;
  let fixture: ComponentFixture<NavBarBSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarBSHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarBSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
