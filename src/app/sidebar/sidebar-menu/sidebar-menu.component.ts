import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarMenuComponent implements OnInit {

  menus = [];
  constructor(menuService: MenusService) {
    this.menus = menuService.menuList;
  }

  ngOnInit() {}

  toggle(currentMenu) {
    this.menus.forEach(element => {
      if (element === currentMenu) {
        currentMenu.active = !currentMenu.active;
      } else {
        element.active = false;
      }
    });
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }
}
