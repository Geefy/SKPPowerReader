import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-clicked-reader',
  templateUrl: './clicked-reader.component.html',
  styleUrls: ['./clicked-reader.component.css']
})
export class ClickedReaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendData(readerValue: string) {
    if (readerValue != '') {
      if (confirm("Er du sikker du vil gemme " + readerValue)) {
        window.alert(readerValue + " blev gemt")
        this.redirectBack();
      }
    }
    else
      window.alert("Måler data feltet er tomt")
  }


  redirectBack() {
    this.router.navigateByUrl('/controller');
  }
}
