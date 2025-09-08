import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "todo-list";
  task = "";
  taskList:{id: number, task: string}[] = [];


  addTask(){
    this.taskList.push({id:this.taskList.length+1,task: this.task});
    this.task='';
    console.log(this.taskList);
  }


  deleteTask(taskId: number)
  {
    this.taskList = this.taskList.filter((item)=>item.id!=taskId);
  }

}
