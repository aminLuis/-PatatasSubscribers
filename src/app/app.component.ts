import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sesion: any = "";

  title = 'PatatasSubscribers';

  ngOnInit(): void {
    console.log(localStorage.getItem('Token'))
  }

  get_sesion(e:any){
    this.sesion = e;
  }

}
