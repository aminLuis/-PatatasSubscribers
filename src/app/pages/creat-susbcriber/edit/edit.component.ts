import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscriber_ } from 'src/app/interfaces/susbcriber.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form_susbcriber: FormGroup;
  topics: any[] = [];
  Subscriberss:Subscriber_[] = [];
  data: FormGroup;

  constructor(public form: FormBuilder) {
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

  edit_susbcriber(){
    console.log(this.form_susbcriber);
  }

}
