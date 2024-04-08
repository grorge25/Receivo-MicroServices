import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.router.navigate(['/main']); // Replace 'main' with your main page route

  }

}

