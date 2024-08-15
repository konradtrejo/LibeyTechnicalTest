import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserlibeyComponent } from './delete-userlibey.component';

describe('DeleteUserlibeyComponent', () => {
  let component: DeleteUserlibeyComponent;
  let fixture: ComponentFixture<DeleteUserlibeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserlibeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserlibeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
