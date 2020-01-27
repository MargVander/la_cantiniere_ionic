import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private souscription: Subscription
  private users: any
  constructor(private UserService: UserService) { }

  ngOnInit() {
    console.log(localStorage.getItem('Authorization'))
    this.getUsers();
  }

  ngOnDestroy() {

  }

  getUsers(event?) {
    this.souscription = this.UserService.getUsers()
      .subscribe(
        resp => {
          this.users = resp;
          console.log(this.users);
          if(event){
            event.target.complete();
            }

        })
  }

  setActivation(id: number) {
    this.UserService.setActivation(id)
      .subscribe(
        resp => {
          console.log(resp)
          this.getUsers();
        }
      )

  }

  setDesactivation(id: number) {
    this.UserService.setDesactivation(id)
      .subscribe(
        resp => {
          this.getUsers();
        }
      )
  }

}
