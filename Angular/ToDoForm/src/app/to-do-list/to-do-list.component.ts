import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
 
  [x: string]: any;
  name = 'Angular';
 TaskList : any[] = [];
 
 
  countTask = 0;
  tasks = '';
constructor(private commonserv:CommonService){
 
}


onTaskCompletion(value:boolean,task:any){
 
  task.isDone=value;
  this.commonserv.updateTasks(task).subscribe((data:any)=>{
  
  })
}


// this mathed is use for the push element in to the array
  addtask(data:any){
 
      let dataToPass={
        title:data,
        isDone:false
  
      }
      this.commonserv.addTasks(dataToPass).subscribe((data:any)=>{
       this.getTask();
       
        
   })
  }
// this mathed is get the index of the element of ayyar and splice that form the array as compare the index and splice
  removeTask(taskId:any) {
    
    this.commonserv.removeTasks(taskId).subscribe((data:any)=>{
    
      this.getTask();
 })
 
     }


getTask(){
  this.commonserv.getTasks().subscribe((tasks:any)=>{
    
    this.TaskList=tasks;
    console.log(this.TaskList);
    this.tasks='';
 
  })
}


  ngOnInit(): void {
    
     this.getTask();
}


}


