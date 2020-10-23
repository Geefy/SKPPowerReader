import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader-controller',
  templateUrl: './reader-controller.component.html',
  styleUrls: ['./reader-controller.component.css']
})
export class ReaderControllerComponent implements OnInit {
  fakeArray = new Array(12)
  constructor() { }

  ngOnInit(): void {
  }

}
