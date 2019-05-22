import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {





  constructor(private httpclient:HttpClient) { }

  getNotice():Observable <any>
  {

    return this.httpclient.get('/home');
        
  }
  
  getNotice1():Observable <any>
  {

    return this.httpclient.get('/faculty/notificationsfaculty');
        
  }
  getNotice2():Observable <any>
  {

    return this.httpclient.get('/students/notificationsstudents');
        
  }
  
  getRegister(v):Observable <any>
  {

    console.log(v);

    return this.httpclient.post<string>('/home/register',v);

  }
  getLogin(v):Observable <any>
  {
    console.log(v);

    return this.httpclient.post<string>('/home/login',v);
  }
  onDelete(v):Observable <any>
  {
    console.log(v);
    return this.httpclient.delete('/del'+"/"+v);
  }
  onCreate(v):Observable <any>
  {
    console.log(v);
    return this.httpclient.post('/faculty/notificationsfaculty',v);
  }
  onSave(v):Observable <any>
  {
    console.log(v);
    return this.httpclient.put<any>('/faculty/notificationsfaculty',v);
  }
  onUpdate(v):Observable <any>
  {
    console.log(v)
    return this.httpclient.put<any>('/students/updateprofilestudents',v);
  }
  // getUpdate():Observable <any>
  // {

  //   return this.httpclient.get('/students/updateprofilestudents');
        
  // }
  
  



}
