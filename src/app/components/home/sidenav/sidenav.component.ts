import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-refresh',
        iconClass: 'text-xl',
      },
      {
        icon: 'pi pi-times',
        iconClass: 'text-xl',
      },

      {
        icon: 'pi pi-external-link',
      },
      {
        icon: 'pi pi-upload',
      },
    ];
  }
}
