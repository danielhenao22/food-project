import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('sidenav') sidenav: MatSidenav;

  sidenavOpened = false;

  close() {
    this.sidenavOpened = false;
    this.sidenav.close();
  }

  open() {
    this.sidenavOpened = true;
    this.sidenav.open();
  }
}
