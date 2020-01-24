import { environment } from './../../../environments/environment';
import { Meal } from 'src/app/models/meal';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les plats de la semaine
  getAllMealsForWeek(weekNumber: number): Observable<Meal[]> {
    return this.http.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findallavailableforweek/' + weekNumber);
  }

  // Méthode pour récupérer tous les plats du jour
  getAllMealsForToday(): Observable<Meal[]> {
    return this.http.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findallavailablefortoday');
  }

  // Méthode pour récupérer un plat
  getMeal(id: string): Observable<Meal> {
    return this.http.get<Meal>(environment.urlServeurBackEnd + 'meal/find/' + id);
  }

  // PROCHAINES METHODES SEULEMENT POUR LA CANTINIERE
  // Méthode pour récupérer tous les plats
  getAllMeal(): Observable<Meal[]> {
    return this.http.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findall');
  }

  // Méthode pour ajouter un plat
  addMeal(meal: Meal): Observable<Meal> {
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.put<Meal>(environment.urlServeurBackEnd + 'meal/add', meal, {headers: reqHeader});
  }

  // Méthode pour supprimer un plat
  deleteMeal(meal: Meal): Observable<Meal> {
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.delete<Meal>(environment.urlServeurBackEnd + 'meal/delete/' + meal, {headers: reqHeader});
  }

  // Méthode pour update un plat
  updateMeal(id: string, meal: Meal): Observable<Meal> {
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.patch<Meal>(environment.urlServeurBackEnd + 'meal/update/' + id, meal, {headers: reqHeader});
  }
}
