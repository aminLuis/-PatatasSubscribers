import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form_login: FormGroup;

  constructor(private deviceService: DeviceDetectorService, public form: FormBuilder) {
    this.form_login = form.group({
      UserName:['',Validators.required],
      Password:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.epicFunction();
  }

  login(){
    console.log(this.form_login.value);
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
