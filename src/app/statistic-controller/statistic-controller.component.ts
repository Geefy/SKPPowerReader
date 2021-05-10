import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-statistic-controller',
  templateUrl: './statistic-controller.component.html',
  styleUrls: ['./statistic-controller.component.css']
})
export class StatisticControllerComponent implements OnInit {

  constructor(private readerApi: ApiService) { }
  public readers: any;
  public locations: any;
  ngOnInit(): void {
    this.readerApi.getReaders().subscribe(req => this.readers = req);
    this.readerApi.getLocation().subscribe(loc => this.locations = loc);
  }
}
