import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from '../model/cinema';
import { DataService } from '../services/data.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public allCinemas: Cinema[] = [];
  public coord;

  constructor(
    private dataService: DataService,
    public router: Router,
    public geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.initData();
    this.geoloc();
  }

  public initData(): any {
    this.dataService.getAllCinema().subscribe((__cinema: Cinema[]) => {
      this.allCinemas = this.sort(__cinema);
    });
  }

  public fav(id: number) {
    this.dataService.getCinemaById(id).subscribe((_cinema: Cinema) => {
      if (_cinema.fav) {
        _cinema.fav = false;
      } else {
        _cinema.fav = true;
      }
      this.dataService.putCinema(id, _cinema).subscribe();
      window.location.reload();
    });
  }

  // alphabtiq sort
  public sort(array): Array<Cinema> {
    array.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

  public geoloc() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coord = resp;
    });
  }
}
