import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { BetterReader } from '../BetterReader';
import { ReaderDTO } from '../ReaderDTO';
import { ApiService } from '../services/api.service';
import { LocationObj} from '../Location'
@Component({
  selector: 'app-clicked-reader',
  templateUrl: './clicked-reader.component.html',
  styleUrls: ['./clicked-reader.component.css']
})
export class ClickedReaderComponent implements OnInit {
  public betterReader: BetterReader;
  public readerDTO: ReaderDTO;
  public locationSave: LocationObj;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.betterReader = history.state;
    this.locationSave = new LocationObj(this.betterReader.location);
    this.readerDTO = new ReaderDTO(this.betterReader.readerNumber, this.betterReader.reading);
  }

  sendData(readerValue: string) {
    if (readerValue != '') {
      if (confirm("Er du sikker på du vil gemme målet: " + readerValue + " " + this.betterReader.readerUnit)) {
        console.log(readerValue);
        this.readerDTO.reading = readerValue;
        this.readerDTO.readerNumber = this.betterReader.readerNumber;
        this.apiService.updateReader(this.readerDTO).subscribe(() => this.redirectBack());
      }
    }
    else
      window.alert("Måler data feltet er tomt")
  }


  redirectBack() {
    console.log(this.betterReader);
    this.router.navigateByUrl('/readers', { state: this.locationSave });
  }
}
