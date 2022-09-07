import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) {
    if (localStorage.getItem('user')) {
      this.model = JSON.parse(localStorage.getItem('user'));
      console.log(this.model)

    }
    console.log(this.model)
  }

  ngOnInit(): void {


  }



  login() {
    // console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);

    })

  }

  logout() {
    this.accountService.logout();
  }

}
