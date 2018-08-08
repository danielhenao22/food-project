import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Sidenav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleActive = false;
  constructor(private sidenav: SidenavService) { }

  ngOnInit() {
  }
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.open();
  }
}
