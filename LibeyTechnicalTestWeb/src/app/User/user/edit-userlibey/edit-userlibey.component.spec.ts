import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserlibeyComponent } from './edit-userlibey.component';

describe('EditUserlibeyComponent', () => {
  let component: EditUserlibeyComponent;
  let fixture: ComponentFixture<EditUserlibeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserlibeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserlibeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
