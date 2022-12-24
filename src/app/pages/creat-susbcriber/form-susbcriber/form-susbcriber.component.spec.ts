import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSusbcriberComponent } from './form-susbcriber.component';

describe('FormSusbcriberComponent', () => {
  let component: FormSusbcriberComponent;
  let fixture: ComponentFixture<FormSusbcriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSusbcriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSusbcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
