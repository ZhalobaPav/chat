import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { PERSON_URL } from '../consts/URLConsts';
import { Observable, take, tap } from 'rxjs';
import { IPerson, IPersonResponse } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  
  public getPersons(): Observable<IPersonResponse>{
    return this.http.get<IPersonResponse>(PERSON_URL);
  }

  public getPerson(id: number): Observable<IPerson>{
    return this.http.get<IPerson>(PERSON_URL + id);
  }
}
