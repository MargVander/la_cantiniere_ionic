import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import * as jwt_decode from 'jwt-decode';

/**
 * Ce service gère :
 * le login de l'utilisateur
 * la gestion de la variable loggedIn
 * qui représente la connexion utilisateur (pour auth guard)
 */


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  data: any;
  user: any;

  /**
   * on crée une variable loggedIn qui va vérifier que l'utilisateur est
   * connecté
   */
  public loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  public loggDAdmin = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isLoggedAdmin() {
    return this.loggDAdmin.asObservable()
    
  }

  /**
 * cette fonction permet de garder loogedIn à true
 * tant que le jwt est en mémoire
 */
  private tokenAvailable(): boolean {
    return !!localStorage.getItem('Authorization');

  }

  /**
 *
 * @param user
 * méthode login utilisateur
 */
  login(user: any): Observable<HttpResponse<Object>> {


    const url = 'http://localhost:8080/lunchtime/login';
    return this.http.post<HttpResponse<Object>>(url, user, { observe: 'response' })

      .pipe(tap(res => {
        let tokenAuth = res.headers.get('Authorization');

        console.log(tokenAuth)
        let decode = jwt_decode(res.headers.get('Authorization'))

        localStorage.setItem('Authorization', tokenAuth);
        localStorage.setItem('Role', decode.roles);
        localStorage.setItem('id', decode.user.id)

        console.log(localStorage.getItem('id'))
        // console.log(localStorage)
        // console.log(localStorage.Role)

        this.loggedIn.next(true);

        if (localStorage.Role.length > 10) {

          console.log(localStorage.Role.length)

          this.loggDAdmin.next(true);

        }

        console.log(this.loggDAdmin)


      }),

        catchError(this.handleLoginError),
      );
  }

  getToken() {
    return localStorage.getItem('Authorization')
  }

  /**
   * Deconnexion
   */
  logout() {

    this.loggedIn.next(false);
    this.loggDAdmin.next(false);
    localStorage.removeItem('Authorization');

    this.router.navigate(['']);

  }

    /**
   * Mot de passe oublié
   */
  forgotPassword(email){
    let obs:Observable<any>
    const url = 'http://localhost:8080/lunchtime/forgotpassword/';
    obs = this.http.post(url, email)
    console.log(obs)
    return obs;
  };

  /**
  * Traitement des erreurs HTTP
  */

  /**
   *
   * @param error
   * traitement des erreurs login
   */
  handleLoginError(error) {

    let errorMessage = '';
    errorMessage = error.error.message;
    return throwError(errorMessage);

  }

}

