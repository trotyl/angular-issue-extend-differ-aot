import { Component, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [
    IterableDiffers.extend([])
  ]
})
export class AppComponent {
  title = 'app';
}
