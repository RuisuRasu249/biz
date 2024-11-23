import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
@Component({
  selector: 'business',
  imports: [RouterOutlet],
  providers: [DataService],
  templateUrl: './business1.component.html',
  styleUrl: './business1.component.css'
})
export class Business1Component {
  business_list: any;

  constructor(public dataService: DataService, private route: ActivatedRoute){}

  ngOnInit(){
    this.business_list = this.dataService.getBusiness(
        this.route.snapshot.paramMap.get('name')
    );
}
}
