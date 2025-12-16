import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseUrl = 'http://localhost:8080/api/properties';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Property[]>(this.baseUrl);
  }
}
