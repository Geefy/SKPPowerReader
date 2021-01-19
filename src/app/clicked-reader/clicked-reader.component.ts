import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { BetterReader } from '../BetterReader';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-clicked-reader',
  templateUrl: './clicked-reader.component.html',
  styleUrls: ['./clicked-reader.component.css']
})
export class ClickedReaderComponent implements OnInit {
  public betterReader: BetterReader;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.betterReader = history.state;
  }

  sendData(readerValue: string) {
    if (readerValue != '') {
      if (confirm("Er du sikker du vil gemme målet: " + readerValue)) {
        this.apiService.updateReader(readerValue, this.betterReader.readerNumber);
        this.redirectBack();
      }
    }
    else
      window.alert("Måler data feltet er tomt")
  }


  redirectBack() {
    this.router.navigateByUrl('');
  }
}
