import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getJobApplications() {
    return this.http.get(environment.APIURL + '/getJobApplication.php');
  }

  getPositions() {
    return this.http.get(environment.APIURL + '/getOpenPosition.php');
  }

  insertPosition(body: string) {
    return this.http.post(environment.APIURL + '/insertPosition.php', body);
  }

  deletePosition(id: string) {
    return this.http.post(environment.APIURL + '/deletePosition.php', id);
  }

  updatePosition(body: any) {
    return this.http.post(environment.APIURL + '/updatePosition.php', body);
  }

  closeJobApplication (body: any) {
    return this.http.post(environment.APIURL + '/closeJobApplication.php', body)
  }

  getManageJob(){
    return this.http.get(environment.APIURL+ '/getManageJob.php')
  }

  getTrainee(){
    return this.http.get(environment.APIURL+ '/getTrainee.php')
  }



}
