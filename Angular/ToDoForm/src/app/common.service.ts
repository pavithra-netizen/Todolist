import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl="http://localhost:3000/tasklist";
  posturl="http://localhost:3000/addlist";
  deleteurl="http://localhost:3000/removetask";
  updateurl="http://localhost:3000/edit";

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get(this.baseUrl);
    
  }
  addTasks(data:any){
    return this.http.post(this.posturl,data);
  }

  removeTasks(taskId:any){
    return this.http.delete(`${this.deleteurl}/${taskId}`);
  }
  updateTasks(task:any){
    return this.http.put(`${this.updateurl}/${task._id}`, task);
  }
  
}
