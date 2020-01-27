import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public user: any;
  private souscription: Subscription;
  id = localStorage.getItem('id')


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser(this.id)

  }

  getUser(id) {
    this.souscription = this.userService.getUser(id)
      .subscribe(
        resp => {
          this.user = resp;
          console.log(this.user);
        }
      )
  }

}