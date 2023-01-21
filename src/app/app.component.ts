import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Post } from '../interfaces/posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  posts: any[] = []
  isLoading: boolean = false
  option: string = ''
  defaultOption: string = ''

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    
  }

  fetchData (option: string) {
    this.isLoading = true
    this.apiService.getPosts(option).subscribe(data => {
      this.posts = data
      this.isLoading = false
    })
  }
}
