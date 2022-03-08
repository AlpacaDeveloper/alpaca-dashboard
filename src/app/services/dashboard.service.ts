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

  closeJobApplication(body: any) {
    return this.http.post(
      environment.APIURL + '/closeJobApplication.php',
      body
    );
  }

  closeJustJobApplication(body: any) {
    return this.http.post(
      environment.APIURL + '/closeJustJobApplication.php',
      body
    );
  }

  closeTraineeJobApplication(body: any) {
    return this.http.post(
      environment.APIURL + '/closeTraineeJobApplication.php',
      body
    );
  }

  getManageJob() {
    return this.http.get(environment.APIURL + '/getManageJob.php');
  }

  getTrainee() {
    return this.http.get(environment.APIURL + '/getTrainee.php');
  }

  getManageTrainee() {
    return this.http.get(environment.APIURL + '/getManageTrainee.php');
  }

  getTraineePosition() {
    return this.http.get(environment.APIURL + '/getTraineePosition.php');
  }

  insertTraineePosition(body: string) {
    // console.log(body);
    return this.http.post(
      environment.APIURL + '/insertTraineePosition.php',
      body
    );
  }

  deleteTraineePosition(id: string) {
    return this.http.post(
      environment.APIURL + '/deleteTraineePosition.php',
      id
    );
  }

  updateTraineePosition(body: any) {
    return this.http.post(
      environment.APIURL + '/updateTraineePosition.php',
      body
    );
  }
}
