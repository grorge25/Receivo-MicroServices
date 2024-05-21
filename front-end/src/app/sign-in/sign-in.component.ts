import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  showPasswordRequirements: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    this.http.post<any>('https://authsvc.pythonanywhere.com/register', { username: this.username, password: this.password, email: this.email })
      .subscribe(
        response => {
          console.log(response.status);
          console.log('Sign Up successful:', response.body);
          this.router.navigate(['/main']);

        },
        error => {
          console.error('Login error:', error);

        }
      );
  }

  onPasswordFocus() {
    console.log('User clicked on password field');
    this.showPasswordRequirements = true;
  }

  onInputFocus() {
    console.log('User clicked on another input field');
    this.showPasswordRequirements = false;
  }

  isSignUpDisabled() {
    // Check if any field is empty or if password requirements are not met
    return !(this.username && this.password && this.email && this.isPasswordValid());
  }

  isPasswordValid() {
    // Add your password validation logic here
    // For example, check if the password meets all requirements
    return this.password.length >= 12 && /[A-Z]/.test(this.password) && /[!@#$%^&*()\-_=+{};:,<.>]/.test(this.password);
  }



}
