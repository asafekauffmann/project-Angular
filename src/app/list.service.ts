import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getCursos() { // Fora do constructor
    return ['Typescript', 'HTML', 'CSS', 'C#',];

  }

}
