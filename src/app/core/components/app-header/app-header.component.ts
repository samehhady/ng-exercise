import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean = false;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.loggedIn.subscribe(
      (action) => {
        this.isLoggedIn = action;
      });

    var isLogged = localStorage.getItem('authenticated');
    if(isLogged){
      this.isLoggedIn = (isLogged == 'true');
    }
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
    this.appService.authenticated(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.isLoggedIn = true;
    this.appService.authenticated(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
    this.appService.authenticated(false);
  }

}
