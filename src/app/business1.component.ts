import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { last } from 'rxjs';

@Component({
  selector: 'business',
  imports: [RouterOutlet, CommonModule, GoogleMapsModule],
  providers: [DataService],
  templateUrl: './business1.component.html',
  styleUrls: ['./business1.component.css'] // Note: styleUrls instead of styleUrl
})
export class Business1Component {
  business_list: any;

  business_lat: any;
  business_lng: any;
  map_options: google.maps.MapOptions = {};
  map_locations: any[] = [];

  constructor(public dataService: DataService, private route: ActivatedRoute){}

  ngOnInit(){
    this.business_list = this.dataService.getBusiness(this.route.snapshot.paramMap.get('name'));
    
    if (this.business_list && this.business_list.length > 0 && this.business_list[0].location && this.business_list[0].location.coordinates) {
      this.business_lat = this.business_list[0].location.coordinates[0];
      this.business_lng = this.business_list[0].location.coordinates[1];

      this.map_locations.push({
        lat: this.business_lat,
        lng: this.business_lng
      })

      this.map_options = {
        mapId: "DEMO_MAP_ID",
        center: {
          lat: this.business_lat,
          lng: this.business_lng
        },
        zoom: 13
      };
    }
  }
}
