import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setInscription(data: any) {

    // var reqHeader = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzU0OTY4OTd9.qniK5uyzGvrAYkp1ODqQATTpjAc5KElsXefHT0TYD0j7Uk0UQz1XDN40mfzkT1M18bhxrqWE5iXJD8jbl3YQgg'
    // });

    console.log(data)
    this.http.put('http://localhost:8080/lunchtime/user/register/', data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getUser(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });
    return this.http.get(`http://localhost:8080/lunchtime/user/find/${id}`, { headers: reqHeader })
  }

  editUser(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });
    this.http.patch(`http://localhost:8080/lunchtime/user/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getUsers(): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });
    return this.http.get('http://localhost:8080/lunchtime/user/findall', { headers: reqHeader });

  }

  setActivation(id: number) {
    let obs: Observable<any>

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });
    obs = this.http.patch('http://localhost:8080/lunchtime/user/activate/' + id, null, { headers: reqHeader })
    console.log(obs)
    return obs;
  }

  setDesactivation(id: number) {
    let obs: Observable<any>

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });
    obs = this.http.patch('http://localhost:8080/lunchtime/user/deactivate/' + id, null, { headers: reqHeader })
    console.log(obs)
    return obs;

  }

  adminUpdate(id: number, content: any) {

    let obs: Observable<any>
    console.log(content)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });


    console.log(id);
    obs = this.http.patch('http://localhost:8080/lunchtime/user/update/' + id, content, { headers: reqHeader })
    console.log(obs);
    return obs;
  }

  walletUpdate(id: number, content: number) {

    let obs: Observable<any>
    console.log(content)
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjg3LjkxLCJwb3N0YWxDb2RlIjoiNTkzMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJTaW1vbmUiLCJmaXJzdG5hbWUiOiJNaWNoZWxpbmUiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiRHVua2VycXVlIiwic2V4IjowLCJzdGF0dXMiOjB9LCJyb2xlcyI6WyJST0xFX0xVTkNITEFEWSIsIlJPTEVfVVNFUiJdLCJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6InRvdG9AZ21haWwuY29tIiwiZXhwIjoxNTgwMDYxNDYyfQ.o7oe4DQR-EnTRZKYtPt9qoHVjUno3DxZx3Wx8nvaSkbFVXA5O57JAzOQEsc_btDE_ks7PmcjouUhyZYgFFLzjw'
    });

    obs = this.http.post('http://localhost:8080/lunchtime/user/credit/' + id + '?amount=' + content, null, { headers: reqHeader })
    console.log(obs)
    return obs;
  }

}
