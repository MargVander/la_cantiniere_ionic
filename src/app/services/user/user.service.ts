import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTcyODE5OH0.DNB2pwyuMJklNwfqKvZH3AulNH-ccMk1ITwX-aHW9bA_z1dSUlAdyhvuAkldNlk3tvmgP_R7oPpg7If02qo_Pg'
    });
    return this.http.get(`http://localhost:8080/lunchtime/user/find/${id}`, { headers: reqHeader })
  }

  editUser(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTcyODE5OH0.DNB2pwyuMJklNwfqKvZH3AulNH-ccMk1ITwX-aHW9bA_z1dSUlAdyhvuAkldNlk3tvmgP_R7oPpg7If02qo_Pg'
    });
    this.http.patch(`http://localhost:8080/lunchtime/user/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}
