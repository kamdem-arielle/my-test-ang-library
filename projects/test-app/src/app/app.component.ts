import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAngLibraryComponent,ButtonComponent,FormModule} from 'my-ang-library';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent,FormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'test-app';
}
