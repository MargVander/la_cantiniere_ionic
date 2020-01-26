import { environment } from './../../../environments/environment';
import { Order } from './../../models/order';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

addOrder(data: Order): Observable<Order> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.put<Order>(environment.urlServeurBackEnd + 'order/add/', data, { headers: reqHeader });
  }

  getConstraint() {
    return this.http.get(`http://localhost:8080/lunchtime/constraint/find/1`)
  }

  editConstraint(data) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    this.http.patch(`http://localhost:8080/lunchtime/constraint/update/1`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getOrdersByDay(day, dayAfter, status) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    return this.http.get(`http://localhost:8080/lunchtime/order/findallbetweendateinstatus?beginDate=${day}&endDate=${dayAfter}&status=${status}`, { headers: reqHeader })
  }

  getOrders(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    return this.http.get(`http://localhost:8080/lunchtime/order/findallforusertoday/${id}`, { headers: reqHeader })
  }

  payOrder(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    this.http.patch(`http://localhost:8080/lunchtime/order/deliverandpay/${id}/1`, {}, { headers: reqHeader } )
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
        if (error.status === 412) {
          alert("L'utilisateur n'a pas assez d'argent")
        }
      })
  }

  cancelOrder(id) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    this.http.patch(`http://localhost:8080/lunchtime/order/cancel/${id}`, {}, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  computePrice(orderId) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiU2ltb25lIiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTk4MDIzNH0.JT6-1hMxYDwcIfH9sMGNS9-O2VCjJFUdOgyqn_L8ZbrGrXwLv-UCcFF6QvThZ2TXlp5cqrTENkcyBHycC2Geeg'
    });
    return this.http.get(`http://localhost:8080/lunchtime/order/computeprice/${orderId}/1`, { headers: reqHeader })
  }
}
