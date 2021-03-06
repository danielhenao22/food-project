import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './shared/Sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavOpened = false;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
  close() {
    this.sidenavService.close();
  }
}
