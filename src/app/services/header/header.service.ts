import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/**
 * Ce service gère :
 * la récupération du jwt dans le localStorage
 * la construction du header à inclure pour les requêtes
 * HTTP vers l'API
 */

/**
 * récupération du jwt dans le local storage
 */
const jwt = localStorage.getItem('Authorization');

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  headerBuilder() {
    /**
     * création du header contenant le jwt
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      })
    };

    console.log(httpOptions)

    return httpOptions;

  }
}
