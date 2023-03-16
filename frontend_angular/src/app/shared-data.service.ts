import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
readonly APIUrl='http://127.0.0.1:8000/'
readonly PhotoUrl='http://127.0.0.1:8000/Media/'
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]> { 
    return this.http.get<any[]>(this.APIUrl+'/department/');
  }
  AddDepartement(data:any){
    return this.http.post(this.APIUrl+'/department/',data);
  }
  UpdateDepartement(data:any){
    return this.http.put(this.APIUrl+'/department/',data);
  }
  DeleteDepartement(id:any){
    return this.http.delete(this.APIUrl+'/department/'+id);
  }
  ////////////////////////////////
  getEmpList():Observable<any[]> { 
    return this.http.get<any[]>(this.APIUrl+'/Employee/');
  }
  AddEmployee(data:any){
    return this.http.post(this.APIUrl+'/Employee/',data);
  }
  UpdateEmployee(data:any){
    return this.http.put(this.APIUrl+'/Employee/',data);
  }
  DeleteEmployee(id:any){
    return this.http.delete(this.APIUrl+'/Employee/'+id);
  }
  ////////////////////////////////
  UploadPhoto(data:any){ 
    return this.http.post(this.APIUrl+'SaveFile',data);
  }


}
