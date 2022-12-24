import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-susbcriber',
  templateUrl: './form-susbcriber.component.html',
  styleUrls: ['./form-susbcriber.component.scss']
})
export class FormSusbcriberComponent implements OnInit {

  form_susbcriber: FormGroup;

  constructor(public form: FormBuilder) { 
    this.form_susbcriber = form.group({
      Name:['',Validators.compose([Validators.required,Validators.min(9), Validators.max(100)])],
      Email:['',Validators.compose([Validators.required,Validators.email,Validators.min(9), Validators.max(100)])],
      PhoneNumber:['',Validators.compose([Validators.required,Validators.maxLength(12)])],
      JobTitle:['',Validators.compose([Validators.required,Validators.min(4),Validators.max(100)])]
    });
  }

  ngOnInit(): void {
  }

  save_susbcriber(){
    console.log(this.form_susbcriber.value);
  }

}
