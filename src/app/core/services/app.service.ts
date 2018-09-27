import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import tasks, { Task } from '../tasks/tasks';

@Injectable()
export class AppService {
  constructor(private sanitizer: DomSanitizer, private http:HttpClient) { }
  loggedIn = new EventEmitter;

  /**
   * @author Ahsan Ayaz
   * @desc Returns an array of tasks to be done as exercise
   */
  getTasks(): Array<Task> {
    return tasks.map((task) => {
      const updatedTask: Task = {description: ''};
      if (task.links && task.links.length) {
        for (const link of task.links) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='${link}'>${link}</a>`);
        }
      } else if (task.routerLinks && task.routerLinks.length) {
        for (const link of task.routerLinks) {
          updatedTask.description = task.description.replace('{{link}}', `<a href='#/${link}' routerLink="${link}">'${link} route'</a>`);
        }
      }
      updatedTask.description = this.sanitizer.bypassSecurityTrustHtml(updatedTask.description) as string;
      return Object.assign({}, task, updatedTask);
    });
  }

  getUsers() {
    return this.http.get("https://randomuser.me/api/?results=20");
  }

  authenticated(type){
    this.loggedIn.emit(type);
    localStorage.setItem('authenticated', type);
  }
}
