import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Post } from '../interfaces/posts'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor (private http: HttpClient) {}
    
    getPosts (option: string): Observable<any> {
        const API_URL = `https://jsonplaceholder.typicode.com/${option}`
        return this.http.get<any>(API_URL)
    }
}