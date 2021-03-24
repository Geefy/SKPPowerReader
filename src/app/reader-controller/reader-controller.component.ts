import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Reader } from '../Reader';

@Component({
  selector: 'app-reader-controller',
  templateUrl: './reader-controller.component.html',
  styleUrls: ['./reader-controller.component.css']
})
export class ReaderControllerComponent implements OnInit {
  constructor(private readerApi: ApiService) { }
  public location;
  public readers;
  ngOnInit(): void {
    this.location = history.state;
    this.readerApi.getReadersByLocation(this.location.locationName).subscribe(req => this.readers = req);
  }

}

