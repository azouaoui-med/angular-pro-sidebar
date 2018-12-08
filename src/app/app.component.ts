import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService) { }
  toggle() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
}
