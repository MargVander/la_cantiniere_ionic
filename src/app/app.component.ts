import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  logged: boolean = false;
  AdminLogged: Boolean = false
  id: any


  constructor(
    private loginService: LoginService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.loginService.isLoggedIn.subscribe(logged => { this.logged = logged })
    this.loginService.isLoggedAdmin.subscribe(AdminLogged => { this.AdminLogged = AdminLogged })
    this.id = localStorage.getItem('id')
    
    
  }

  logOut() {
    this.loginService.logout();
  }
}
