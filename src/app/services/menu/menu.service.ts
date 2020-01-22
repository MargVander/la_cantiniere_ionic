import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  addIngredient(data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTgxMTU2Mn0.QAlcZCyAST8nx7uwZ9UM7jthWNIXiXebyXGu-tbYy5lt1pV2LwNDXUqs_obgfqe3Ow1pqgrcaxkuVctIBr3ECw'
    });
    this.http.put('http://localhost:8080/lunchtime/ingredient/add', data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);

      })

  }

  getIngredients() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTgxMTU2Mn0.QAlcZCyAST8nx7uwZ9UM7jthWNIXiXebyXGu-tbYy5lt1pV2LwNDXUqs_obgfqe3Ow1pqgrcaxkuVctIBr3ECw'
    });
    return this.http.get('http://localhost:8080/lunchtime/ingredient/findall', { headers: reqHeader })
  }

  getIngredient(id) {
    return this.http.get(`http://localhost:8080/lunchtime/ingredient/find/${id}`)
  }

  editIngredient(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTgxMTU2Mn0.QAlcZCyAST8nx7uwZ9UM7jthWNIXiXebyXGu-tbYy5lt1pV2LwNDXUqs_obgfqe3Ow1pqgrcaxkuVctIBr3ECw'
    });
    this.http.patch(`http://localhost:8080/lunchtime/ingredient/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteIngredient(id) {
    console.log(id);

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjEwNS45MiwicG9zdGFsQ29kZSI6IjU5MzAwIiwicmVnaXN0cmF0aW9uRGF0ZSI6MTU1MTUzNjI0ODAwMCwiZW1haWwiOiJ0b3RvQGdtYWlsLmNvbSIsImlzTHVuY2hMYWR5Ijp0cnVlLCJuYW1lIjoiRHVyYW50IiwiZmlyc3RuYW1lIjoiTWljaGVsaW5lIiwicGhvbmUiOiIwMTQ4NTY3ODk3IiwidG93biI6IkR1bmtlcnF1ZSIsInNleCI6MCwic3RhdHVzIjowfSwicm9sZXMiOlsiUk9MRV9MVU5DSExBRFkiLCJST0xFX1VTRVIiXSwiaXNzIjoic2VjdXJlLWFwaSIsImF1ZCI6InNlY3VyZS1hcHAiLCJzdWIiOiJ0b3RvQGdtYWlsLmNvbSIsImV4cCI6MTU3OTgxMTU2Mn0.QAlcZCyAST8nx7uwZ9UM7jthWNIXiXebyXGu-tbYy5lt1pV2LwNDXUqs_obgfqe3Ow1pqgrcaxkuVctIBr3ECw'
    });
    this.http.delete(`http://localhost:8080/lunchtime/ingredient/delete/${id}`, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  addMeal(data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzYxNzM4MjB9.Y6r49hzcHSkOZeXvHpki-U8YJ7XQLI-WMZNu3Xq2M76grl4CM-Uj6MJTe5HPSijyj6hbw-joOldEQTKU0t2Bww'
    });
    this.http.put('http://localhost:8080/lunchtime/meal/add', data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getMeals() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzg0MjUyNDZ9.9AkNLM5jsriV5Jr_l2G6nz3l3FgdCzDTtC32qQpIB4xEIg7naYDgcFhgdgCe5NgweNnPXmNeilSibIV90Uc2Kw'
    });
    return this.http.get('http://localhost:8080/lunchtime/meal/findall', { headers: reqHeader })
  }

  getMeal(id) {
    return this.http.get(`http://localhost:8080/lunchtime/meal/find/${id}`)
  }

  getMealsByDay() {
    return this.http.get('http://localhost:8080/lunchtime/meal/findallavailablefortoday')
  }

  editMeal(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzgyMzQzMTh9.UtajINPZoqv2Yg2L4Ecabsu15c7ggwTj-gOsaHmFhX-OZzjZdOypfLHzJiAKSayQI6DHzUsoIMr9PkKiMp8HjQ'
    });
    this.http.patch(`http://localhost:8080/lunchtime/meal/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

 deleteMeal(id) {
    console.log(id);
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzg0MjUyNDZ9.9AkNLM5jsriV5Jr_l2G6nz3l3FgdCzDTtC32qQpIB4xEIg7naYDgcFhgdgCe5NgweNnPXmNeilSibIV90Uc2Kw'
   });
   this.http.delete(`http://localhost:8080/lunchtime/meal/delete/${id}`, { headers: reqHeader })
   .subscribe(data => {
    console.log(data);
  }, error => {
    console.log(error);
  }) 
  }


  addMenu(data: any) {
    console.log(data);

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzY0MjcyNTh9.ortWyEKIOMisPetxiyDta4p4BPVRoG80OMofMOSnNtcA0gwtYrm0WViUJCmEQqtgkqv5HLhVR_P9R_7PE2qZ4g'
    });
    this.http.put('http://localhost:8080/lunchtime/menu/add', data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getMenus() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzg0MjUyNDZ9.9AkNLM5jsriV5Jr_l2G6nz3l3FgdCzDTtC32qQpIB4xEIg7naYDgcFhgdgCe5NgweNnPXmNeilSibIV90Uc2Kw'
    });
    return this.http.get('http://localhost:8080/lunchtime/menu/findall', { headers: reqHeader })
  }

  getMenu(id) {
    return this.http.get(`http://localhost:8080/lunchtime/menu/find/${id}`)
  }

  getMenusByDay() {
    return this.http.get('http://localhost:8080/lunchtime/menu/findallavailablefortoday');
  }

  editMenu(id, data: any) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1NzgyMzQzMTh9.UtajINPZoqv2Yg2L4Ecabsu15c7ggwTj-gOsaHmFhX-OZzjZdOypfLHzJiAKSayQI6DHzUsoIMr9PkKiMp8HjQ'
    });
    this.http.patch(`http://localhost:8080/lunchtime/menu/update/${id}`, data, { headers: reqHeader })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteMenu(id) {
    console.log(id);
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjoxLCJhZGRyZXNzIjoiNDMgcnVlIGRlIGxhIFByYWlyaWUiLCJ3YWxsZXQiOjUwLjAwLCJwb3N0YWxDb2RlIjoiNzUwMDAiLCJyZWdpc3RyYXRpb25EYXRlIjoxNTUxNTM2MjQ4MDAwLCJlbWFpbCI6InRvdG9AZ21haWwuY29tIiwiaXNMdW5jaExhZHkiOnRydWUsIm5hbWUiOiJEdXJhbnQiLCJmaXJzdG5hbWUiOiJBbGJlcnQiLCJwaG9uZSI6IjAxNDg1Njc4OTciLCJ0b3duIjoiUGFyaXMiLCJzZXgiOjAsInN0YXR1cyI6MH0sInJvbGVzIjpbIlJPTEVfTFVOQ0hMQURZIiwiUk9MRV9VU0VSIl0sImlzcyI6InNlY3VyZS1hcGkiLCJhdWQiOiJzZWN1cmUtYXBwIiwic3ViIjoidG90b0BnbWFpbC5jb20iLCJleHAiOjE1Nzg0MjUyNDZ9.9AkNLM5jsriV5Jr_l2G6nz3l3FgdCzDTtC32qQpIB4xEIg7naYDgcFhgdgCe5NgweNnPXmNeilSibIV90Uc2Kw'
   });
   this.http.delete(`http://localhost:8080/lunchtime/menu/delete/${id}`, { headers: reqHeader })
   .subscribe(data => {
    console.log(data);
  }, error => {
    console.log(error);
  }) 
  }
}
