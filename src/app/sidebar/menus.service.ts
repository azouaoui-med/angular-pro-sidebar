import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus = [
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,

      submenus: [
        {
          title: 'Dashboard 1',
        },
        {
          title: 'Dashboard 2'
        },
        {
          title: 'Dashboard 3'
        }
      ]
    },
    {
      title: 'E-commerce',
      icon: 'fa fa-shopping-cart',
      active: false,
      submenus: [
        {
          title: 'Products',
        },
        {
          title: 'Orders'
        },
        {
          title: 'Credit cart'
        }
      ]
    },
    {
      title: 'Components',
      icon: 'far fa-gem',
      active: false,
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
        }
      ]
    },
    {
      title: 'Charts',
      icon: 'fa fa-chart-line',
      active: false,
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map'
        }
      ]
    }
  ];

  constructor() { }
  get menuList() {
    return this.menus;
  }
}
