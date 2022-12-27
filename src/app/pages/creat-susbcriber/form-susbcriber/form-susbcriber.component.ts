import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber_, Susbcribers } from 'src/app/interfaces/susbcriber.interface';
import { SusbcribersServiceService } from 'src/app/services/susbcribers-service.service';

@Component({
  selector: 'app-form-susbcriber',
  templateUrl: './form-susbcriber.component.html',
  styleUrls: ['./form-susbcriber.component.scss']
})
export class FormSusbcriberComponent implements OnInit {

  form_susbcriber: FormGroup;
  topics: any[] = [];
  Subscriberss:Subscriber_[] = [];
  data: FormGroup;

  constructor(public form: FormBuilder, private susbcriber_service:SusbcribersServiceService) { 
    this.form_susbcriber = form.group({
      Name:['',Validators.compose([Validators.required,Validators.min(9), Validators.max(100)])],
      Email:['',Validators.compose([Validators.required,Validators.email,Validators.min(9), Validators.max(100)])],
      CountryCode:['',Validators.required],
      PhoneNumber:['',Validators.compose([Validators.required,Validators.maxLength(12)])],
      JobTitle:['',Validators.compose([Validators.required,Validators.min(4),Validators.max(100)])],
      Area:['',Validators.required],
      Topics:['']
    });
    this.data = form.group({
      Subscribers:['']
    });
  }

  ngOnInit(): void {
  }

  save_susbcriber(){
    if(this.form_susbcriber.valid){
      this.form_susbcriber.value['Topics'] = this.topics;
    
      this.Subscriberss.push(this.form_susbcriber.value);

      this.data.value['Subscribers'] = this.Subscriberss;
     
      this.susbcriber_service.save_suscriber(this.data.value).subscribe(res=>{
        alert('Suscriptor guardado con éxito !!');
        this.data.reset();
        this.form_susbcriber.reset();
      });
    }
  }

}
