import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavOpened = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.sidenavOpened = false;
    this.sidenav.close();
  }

  open() {
    this.sidenavOpened = true;
    this.sidenav.open();
  }
}
