import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: '2'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                }
            ]
        },
        {
            separator: true
        }
    ];
}
}
