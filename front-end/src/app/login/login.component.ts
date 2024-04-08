import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post<any>('http://192.168.1.193:5000/login', { username: this.username, password: this.password })
      .subscribe(
        response => {
          console.log(response.status);

          if (response.status === undefined) {
            console.log('Login successful:', response.body);
            // Redirect to main page after successful login
            this.router.navigate(['/signin']); // Replace 'main' with your main page route
          } else if (response.status === 401) {
            console.log('Invalid username or password');
            // Display error message to user
          }
        },
        error => {
          console.error('Login error:', error);
          // Display error message to user
        }
      );
  }
}