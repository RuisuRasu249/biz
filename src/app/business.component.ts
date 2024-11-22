import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'businesses',
  imports: [RouterOutlet],
  providers: [DataService],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  business_list: any;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.business_list = this.dataService.getBusiness();
  }
}
