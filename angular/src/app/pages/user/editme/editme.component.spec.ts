import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmeComponent } from './editme.component';

describe('EditmeComponent', () => {
  let component: EditmeComponent;
  let fixture: ComponentFixture<EditmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
