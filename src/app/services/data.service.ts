import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cinema } from '../model/cinema';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  // public getAllCinema(): Observable<void> {
  //   return this.http.get<Cinema[]>(`${environment.backendDomain}/cinema`).pipe(
  //     map((value: any) => {
  //       return value;
  //     })
  //   );
  // }

  getAllCinema() {
    return this.http.get<Cinema[]>(`${environment.backendDomain}/cinema`);
  }

  public getCinemaById(id: number) {
    return this.http.get<any>(`${environment.backendDomain}/cinema/${id}`);
  }

  public putCinema(id: number, cinema: Cinema) {
    return this.http.patch<any>(
      `${environment.backendDomain}/cinema/${id}`,
      cinema
    );
  }
}
