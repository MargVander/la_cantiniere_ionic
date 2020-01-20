import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  id:number;
  public user: any;
  private souscription: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(param=> this.id = param.id)
  }

  ngOnInit() {
    this.getUser(this.id)
  }

  getUser(id){
    this.souscription = this.userService.getUser(id)
    .subscribe(
      resp => {
        this.user = resp;
        console.log(this.user);
      }
    )    
  }

}
