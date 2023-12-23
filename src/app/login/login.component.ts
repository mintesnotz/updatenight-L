import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model'; 
// Import HttpClientModule
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Use styleUrls instead of styleUrl
})
export class LoginComponent {
  user: User = { username: '', email: '', password: '' }; // Initialize user object

  constructor(private authService: AuthService) {}

  registerUser(): void {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Handle successful registration, e.g., redirect to login page
      },
      (error) => {
        console.error('Error registering user:', error);
        // Handle registration error
      }
    );
  }
}


