import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sesion: boolean = false;

  title = 'PatatasSubscribers';

  ngOnInit(): void {
    if(localStorage.getItem('Token')!=null){
      this.sesion = true;
    }else{
      this.sesion = false;
    }
  }

  get_sesion(e:any){
    this.sesion = e;
    window.location.reload();
  }

}
