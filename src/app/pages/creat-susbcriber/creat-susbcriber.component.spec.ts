import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSusbcriberComponent } from './creat-susbcriber.component';

describe('CreatSusbcriberComponent', () => {
  let component: CreatSusbcriberComponent;
  let fixture: ComponentFixture<CreatSusbcriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatSusbcriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatSusbcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
