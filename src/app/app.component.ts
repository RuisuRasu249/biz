import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessComponent } from './businesses.component';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My biz';
}
