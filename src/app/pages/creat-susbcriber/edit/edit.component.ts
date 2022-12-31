import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscriber_ } from 'src/app/interfaces/susbcriber.interface';
import { Susbcriber } from 'src/app/interfaces/susbcribers.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SusbcribersServiceService } from 'src/app/services/susbcribers-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form_susbcriber_edit: FormGroup;
  topics: any[] = [];
  Subscriberss:Subscriber_[] = [];
  data_edit: FormGroup;
  @Input() susbcriber: Susbcriber[] = [];
  @Input() current_susbcriber!: Susbcriber;

  constructor(public form: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Susbcriber, private susbcriber_service:SusbcribersServiceService) {
    this.form_susbcriber_edit = form.group({
      Name:['',Validators.compose([Validators.required,Validators.min(9), Validators.max(100)])],
      Email:['',Validators.compose([Validators.required,Validators.email,Validators.min(9), Validators.max(100)])],
      CountryCode:['',Validators.required],
      PhoneNumber:['',Validators.compose([Validators.required,Validators.maxLength(12)])],
      JobTitle:['',Validators.compose([Validators.required,Validators.min(4),Validators.max(100)])],
      Area:['',Validators.required],
      Topics:['']
    });
    this.data_edit = form.group({
      Subscribers:['']
    });
   
   }

  ngOnInit(): void {
   this.current_susbcriber = this.data;
   console.log(this.current_susbcriber);
  }

  edit_susbcriber(){
    if(this.form_susbcriber_edit.valid){
      this.current_susbcriber.Topics = this.topics;
      this.data_edit.value['Subscribers'] = this.current_susbcriber;
      this.susbcriber_service.edit_susbcriber(this.data_edit.value,this.current_susbcriber.Id).subscribe(res=>{
        alert('Se ha editado al suscriptor !!');
      })
      console.log(this.form_susbcriber_edit.value);
    }
    
  }



}
