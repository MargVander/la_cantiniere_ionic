import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  logged: boolean = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    console.log("rtyuio");
    
    this.loginService.isLoggedIn.subscribe(logged => { this.logged = logged })
    console.log(this.logged);
    
  }

}
