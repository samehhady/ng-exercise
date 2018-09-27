import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../core/services/app.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:any = [];

  constructor(private appService:AppService, private router:Router) {
  }

  ngOnInit() {
    this.appService.getUsers().subscribe(
      response => {
        this.users = response['results'];
      });
  }

  goTo(user) {
    var userObject = {
      first: user.name.first,
      last: user.name.last,
      picture: user.picture.medium,
      email: user.email,
      phone: user.phone
    }
    this.router.navigate(['user-list/details/' + user.login.uuid, userObject]);
  }

}
