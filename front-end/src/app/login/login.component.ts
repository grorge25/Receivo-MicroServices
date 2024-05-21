import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  rememberMe: boolean = false;
  username: string | undefined;
  password: string | undefined;
  loginError: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post<any>('https://authsvc.pythonanywhere.com/login', { 
      username: this.username, 
      password: this.password, 
      rememberMe: this.rememberMe 
    })
    .subscribe(
      response => {
        console.log(response.status);

        
        if (response.status === 'success') {
          this.router.navigate(['/main']);
        } else if (response.status === 401) {
          console.log('Invalid username or password');
        }
      },
      error => {
        console.error('Login error:', error);
        
        this.loginError = true;
      }
    );
  }
}


