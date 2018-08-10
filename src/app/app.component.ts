import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './shared/Sidenav.service';
import { of, Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavOpened = false;
  constructor(private sidenavService: SidenavService, private router: Router) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.canShowNavBar();
  }
  close() {
    this.sidenavService.close();
  }

  canShowNavBar(): Observable<{}> {
    const isLoginPage = this.router.isActive('login', false);
    return of(!isLoginPage);
  }
}
