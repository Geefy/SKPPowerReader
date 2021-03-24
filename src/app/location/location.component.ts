import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private locationApi: ApiService) { }
  public locations;
  ngOnInit(): void {
    this.locationApi.getLocation().subscribe(req => this.locations = req);
    for (var i = 0; i < this.locations.length; i++) {
      console.log(this.locations[i].locationName);
    }
  }
  public redirectClick() {

  }
}
