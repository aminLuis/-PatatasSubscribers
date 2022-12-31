import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { Alldata, Susbcriber } from '../interfaces/susbcribers.interface';
import { Susbcribers } from '../interfaces/susbcriber.interface';

const URL = environment.API_SUSBCRIBERS;

const token = localStorage.getItem('Token');

let header = new HttpHeaders();
header = header.append('Authorization','Bearer '+token);

let params = new HttpParams();
params = params.append('page',1);
params = params.append('sortType','1');
params = params.append('count',7);

@Injectable({
  providedIn: 'root'
})
export class SusbcribersServiceService {

  private refresh = new Subject<void>();

  get reload(){
    return this.refresh;
  }

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

  pagination(page:string):Observable<Alldata>{
    params = params.append('page',page);
    params = params.append('sortType','0');
    return this.http.get<Alldata>(URL,{headers:header,params:params})
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  save_suscriber(new_susb: any[]):Observable<Susbcribers>{
    return this.http.post<Susbcribers>(URL,new_susb,{headers:header})
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  edit_susbcriber(current_susb: Susbcriber, id:Number):Observable<Susbcriber>{
    return this.http.put<Susbcriber>(URL+"/"+id,current_susb,{headers:header})
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }
   
  delete_susbcriber(id:Number):Observable<{}>{
    return this.http.delete<{}>(URL+"/"+id,{headers:header})
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }


}
