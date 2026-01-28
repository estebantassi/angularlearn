import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  imports: [],
})

export class HomePage {

  constructor(private http: HttpClient) {}

  onButtonClick() {
    
    this.http.get('http://localhost:8080/signup').subscribe({
      next: data => console.log(data),
      error: err => console.error(err)
    });
  }
}