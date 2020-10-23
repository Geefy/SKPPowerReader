import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-water-reader',
  templateUrl: './water-reader.component.html',
  styleUrls: ['./water-reader.component.css']
})
export class WaterReaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectClick() {
    this.router.navigateByUrl('/clicked');
  }
}
