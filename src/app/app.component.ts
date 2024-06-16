import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService, private route: Router) {

  }
  onLogout() {
    this.authService.logout();
    this.route.navigate(['/login']);
  }
}
