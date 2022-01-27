import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepropComponent } from './singleprop.component';

describe('SinglepropComponent', () => {
  let component: SinglepropComponent;
  let fixture: ComponentFixture<SinglepropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
