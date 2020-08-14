import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Inicio',
      action: this.onClick.bind(this),
      icon: 'po-icon-home',
      shortLabel: 'Inicio',
    },
    {
      label: 'Cadastro de Usuários',
      action: this.onClick.bind(this),
      icon: 'po-icon-users',
      shortLabel: 'C. Usuários',
    },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
