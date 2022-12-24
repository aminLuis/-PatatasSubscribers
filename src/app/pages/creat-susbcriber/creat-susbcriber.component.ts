import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormSusbcriberComponent } from './form-susbcriber/form-susbcriber.component';

@Component({
  selector: 'app-creat-susbcriber',
  templateUrl: './creat-susbcriber.component.html',
  styleUrls: ['./creat-susbcriber.component.scss']
})
export class CreatSusbcriberComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(FormSusbcriberComponent);
  }

}
