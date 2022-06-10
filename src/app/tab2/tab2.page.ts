import { Component } from '@angular/core';
import { Cinema } from '../model/cinema';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public allCinemas: Cinema[] = [];
  public noFav = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.initData();
  }

  public initData(): any {
    this.dataService.getAllCinema().subscribe((__cinema) => {
      __cinema.forEach((_cinema: Cinema) => {
        if (_cinema.fav) {
          this.allCinemas.push(_cinema);
        }
      });
      this.noFav = this.allCinemas.length === 0;
    });
  }
}
