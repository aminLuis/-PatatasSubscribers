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
  page1:number=1;
  page2:number=2;
  page3:number=3;
  subscription: any;

  constructor(private susbcribers_service:SusbcribersServiceService) { }

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

  list_pagination(){
    this.susbcribers = [];
    this.susbcribers_service.pagination(this.page1+"").subscribe(res=>{
      this.susbcribers = res.Data;
    });
  }

  next(){
    this.page1 = this.page1 + 1;
    this.page2 = this.page2 + 1;
    this.page3 = this.page3 + 1;
    this.list_pagination();
  }

  previous(){
    this.page1 = this.page1 - 1;
    this.page2 = this.page2 - 1;
    this.page3 = this.page3 - 1;
  }

  jump(numb:number){
    this.page1 = numb;
    this.page2 = this.page1 + 1;
    this.page3 = this.page2 + 1;
  }

  delete_susbcriber(id:Number){
    this.susbcribers_service.delete_susbcriber(id).subscribe(res=>{
      alert('Suscriptor eliminado !!');
    });
  }

}
