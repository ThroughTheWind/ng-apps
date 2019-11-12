import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/src/public-api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'My Client App';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut();
  }

}
