import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../core/services/app.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:any;

  constructor(private appService:AppService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params;
    });
  }

  goback(){
    this.router.navigate(['user-list']);
  }

}
