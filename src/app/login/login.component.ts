import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form_login: FormGroup;
  @Output() sesion = new EventEmitter<boolean>();
  sesion_estatus: any = "init";

  constructor(private deviceService: DeviceDetectorService, 
    public form: FormBuilder,
    private login_service:LoginServiceService,
    private router:Router
    ) {
    this.form_login = form.group({
      UserName:['',Validators.required],
      Password:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.epicFunction();
  }

  send_sesion(){
    this.sesion.emit(true);
  }

  login(){
    this.login_service.login_user(this.form_login.value).subscribe(res=>{
      if(res!=null){
        localStorage.setItem('Token',res.Token);
        this.send_sesion();
      }
    });
  }

  epicFunction() {
    console.log('hello `Home` component');
    const deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(deviceInfo);
    //console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    //console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    //console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

}
