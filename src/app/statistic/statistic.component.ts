import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reader } from '../Reader';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  public reader: Reader;

  ngOnInit(): void {
  }

  redirectClick() {
    this.router.navigateByUrl('/clickedStats', { state: this.reader });
  }
}
