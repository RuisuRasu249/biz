import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'businesses',
  imports: [RouterOutlet],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  business_list = [
    {
      "name": "Pizza Mountain",
      "town": "Coleraine",
      "rating": 5,
    },
    {
      "name": "Wine lake",
      "town": "Balymoney",
      "rating": 3,
    },
    {
      "name": "Sweet Desert",
      "town": "Ballymena",
      "rating": 4,
    },
  ]
}
