import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard' },
  { state: 'sensor', name: 'Parameters', type: 'link', icon: 'analytics' },
  { state: 'device', name: 'Devices', type: 'link', icon: 'memory' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {

    if (!MENUITEMS.filter(item => item.state === 'admin').length) {
      const roles = localStorage.getItem('roles');
      if (roles === 'admin' || roles.indexOf('admin') > -1) {
        MENUITEMS.push({ state: 'admin', name: 'Admin panel', type: 'link', icon: 'admin_panel_settings' });
      }
    }

    return MENUITEMS;
  }
}
