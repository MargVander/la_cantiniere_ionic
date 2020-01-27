import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = this.headerService.headerBuilder();


  constructor(private http: HttpClient, private headerService: HeaderService) { }

  setInscription(data: any): Observable<any> {

    console.log(data)
    return this.http.put('http://localhost:8080/lunchtime/user/register/', data);
  }

  getUsers(): Observable<any> {

    console.log(this.httpOptions)
    return this.http.get('http://localhost:8080/lunchtime/user/findall', this.httpOptions);

  }

  getUser(id: number): Observable<any> {

    return this.http.get('http://localhost:8080/lunchtime/user/find/' + id, this.httpOptions);


  }

  editUser(id, data: any) {
    this.http.patch(`http://localhost:8080/lunchtime/user/update/${id}`, data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteUser(id) {
    this.http.delete(`http://localhost:8080/lunchtime/user/delete/${id}`, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  setActivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/activate/' + id, null, this.httpOptions)
    console.log(obs)
    return obs;
  }

  setDesactivation(id: number) {

    let obs: Observable<any>

    obs = this.http.patch('http://localhost:8080/lunchtime/user/deactivate/' + id, null, this.httpOptions)
    console.log(obs)
    return obs;

  }

  setDroit(id: number) {

    this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, null, this.httpOptions)

  }

  adminUpdate(id: any, content: any) {

    let obs: Observable<any>
    console.log(content)


    console.log(id);
    obs = this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, content, this.httpOptions)
    console.log(obs);
    return obs;
  }

  walletUpdate(id: number, content: number) {

    let obs: Observable<any>
    console.log(content)

    obs = this.http.post('http://localhost:8080/lunchtime/user/credit/' + id + '?amount=' + content, null, this.httpOptions)
    console.log(obs)
    return obs;
  }

}
