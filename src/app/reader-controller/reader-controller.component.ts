import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Reader } from '../Reader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reader-controller',
  templateUrl: './reader-controller.component.html',
  styleUrls: ['./reader-controller.component.css']
})
export class ReaderControllerComponent implements OnInit {
  constructor(private readerApi: ApiService, private router: Router) { }
  public location;
  public readers;
  ngOnInit(): void {
    this.location = history.state;
      console.log(this.location);
      this.readerApi.getReadersByLocation(this.location.locationName).subscribe(req => this.readers = req);
  }
  redirectBack() {
    this.router.navigateByUrl('');
  }
}

