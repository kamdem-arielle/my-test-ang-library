import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAngLibraryComponent,ButtonComponent,FormModule,ArielleSidenavModule} from 'my-ang-library';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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

  goToPether() {
    window.open('https://pether.tech', '_blank');
  }
}
