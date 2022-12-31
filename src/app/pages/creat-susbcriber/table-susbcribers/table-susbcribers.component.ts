import { Component, Input, OnInit } from '@angular/core';
import { SusbcribersServiceService } from 'src/app/services/susbcribers-service.service';
import { Susbcriber } from 'src/app/interfaces/susbcribers.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-table-susbcribers',
  templateUrl: './table-susbcribers.component.html',
  styleUrls: ['./table-susbcribers.component.scss']
})
export class TableSusbcribersComponent implements OnInit {

  susbcribers: Susbcriber[] = [];
  @Input() send_susbcriber!: Susbcriber;
  subscription: any;

  constructor(private susbcribers_service:SusbcribersServiceService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.list_susbcribers();
    this.subscription = this.susbcribers_service.reload.subscribe(()=>{
      this.list_susbcribers();
    });
  }

  list_susbcribers(){
    this.susbcribers_service.get_susbcribers().subscribe(res=>{
      this.susbcribers = res.Data;
      console.log(this.susbcribers);
    });
  }

  open_edit(){
    this.dialog.open(EditComponent,{
      data: this.send_susbcriber
    });
  }

  capture_susbcriber(susbcriber:Susbcriber){
    this.send_susbcriber = susbcriber;
  }

}
