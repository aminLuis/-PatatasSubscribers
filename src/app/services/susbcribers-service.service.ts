import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Alldata, Susbcriber } from '../interfaces/susbcribers.interface';
import { Susbcribers } from '../interfaces/susbcriber.interface';

const URL = environment.API_SUSBCRIBERS;

const token = localStorage.getItem('Token');

let header = new HttpHeaders();
header = header.append('Authorization','Bearer '+token);

let params = new HttpParams();
params = params.append('page','1');
params = params.append('sortType','1');

@Injectable({
  providedIn: 'root'
})
export class SusbcribersServiceService {

  constructor(private http:HttpClient) { }

  get_susbcribers():Observable<Alldata>{
    return this.http.get<Alldata>(URL,{headers:header,params:params})
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  save_suscriber(new_susb: any[]):Observable<Susbcribers>{
    return this.http.post<Susbcribers>(URL,new_susb,{headers:header})
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }
   
  

}
