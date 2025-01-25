import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAngLibraryComponent,ButtonComponent,FormModule,ArielleSidenavModule} from 'my-ang-library';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus,faHome,faAddressCard,faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { DrawerComponent } from "../../../my-ang-library/src/lib/arielle-sidenav/drawer/drawer.component";

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, FormModule, FontAwesomeModule, ArielleSidenavModule, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'test-app';
  faCoffee = faPlus;
  navBarLinks = [
    {
      name: 'Home',
      route: 'home',
      icon: faHome,
      sublinks: []
    },
    {
      name: 'Serivices',
      route: 'home',
      icon: faHome,
      sublinks: []
    },
    {
      name: 'Policies',
      route: 'home',
      icon: 'ic_home',
      sublinks: []
    },
    {
      name: 'Diagnosis',
      route: 'home',
      icon: faAddressCard,
      sublinks: []
    },
    {
      name: 'Profile',
      icon: faAddressCard,
      sublinks: [
        { name: 'Settings',route: 'settings', icon: faCalendarCheck },
        { name: 'Logout',route: '/', icon: faCalendarCheck }
      ]
    },
    // Add more links as needed
  ];

  goToPether() {
    window.open('https://pether.tech', '_blank');
  }
}
