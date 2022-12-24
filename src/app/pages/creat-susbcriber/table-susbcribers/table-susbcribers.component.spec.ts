import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSusbcribersComponent } from './table-susbcribers.component';

describe('TableSusbcribersComponent', () => {
  let component: TableSusbcribersComponent;
  let fixture: ComponentFixture<TableSusbcribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSusbcribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSusbcribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
