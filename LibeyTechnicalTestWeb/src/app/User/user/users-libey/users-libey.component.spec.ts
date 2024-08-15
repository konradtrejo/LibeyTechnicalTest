import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLibeyComponent } from './users-libey.component';

describe('UsersLibeyComponent', () => {
  let component: UsersLibeyComponent;
  let fixture: ComponentFixture<UsersLibeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLibeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLibeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
