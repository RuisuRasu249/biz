import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'businesses',
  imports: [RouterOutlet, RouterModule],
  providers: [DataService],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  business_list: any;
  page: number = 1;

  constructor(public dataService: DataService){}

  ngOnInit(){
    if(sessionStorage['page']){
      this.page = Number(sessionStorage['page']);
    }
    this.business_list = this.dataService.getBusinesses(this.page);
  }

  previousPage(){
    if(this.page > 1){
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.business_list = this.dataService.getBusinesses(this.page);
    }
  }

  nextPage(){
    if(this.page < this.dataService.getLastPageNumber()){
      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.business_list = this.dataService.getBusinesses(this.page);
    }
  }
}
