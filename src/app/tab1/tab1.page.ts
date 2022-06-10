import { Component, OnInit } from '@angular/core';
import { Cinema } from '../model/cinema';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public allCinemas: Cinema[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.initData();
  }

  public initData() {
    this.dataService.getAllCinema().subscribe((__cinema: Cinema[]) => {
      this.allCinemas = __cinema;
    });
  }
}
