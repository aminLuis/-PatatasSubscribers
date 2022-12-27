import { Component, OnInit } from '@angular/core';
import { Susbcriber } from 'src/app/interfaces/susbcribers.interface';
import { SusbcribersServiceService } from 'src/app/services/susbcribers-service.service';

@Component({
  selector: 'app-list-subscribers',
  templateUrl: './list-subscribers.component.html',
  styleUrls: ['./list-subscribers.component.scss']
})
export class ListSubscribersComponent implements OnInit {

  susbcribers: Susbcriber[] = [];

  constructor(private susbcribers_service:SusbcribersServiceService) { }

  ngOnInit(): void {
    this.list_susbcribers();
  }

  list_susbcribers(){
    this.susbcribers_service.get_susbcribers().subscribe(res=>{
      this.susbcribers = res.Data;
      console.log(this.susbcribers);
    });
  }

}
