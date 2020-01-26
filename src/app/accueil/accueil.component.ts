import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  logged: boolean = false;  
  AdminLogged: Boolean = false
  id: any


  constructor(private loginService: LoginService) { }

  ngOnInit() {    
    this.loginService.isLoggedIn.subscribe(logged => { this.logged = logged })
    this.loginService.isLoggedAdmin.subscribe(AdminLogged => { this.AdminLogged = AdminLogged })
    this.id = localStorage.getItem('id')
    
  }

}
