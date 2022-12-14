import { HttpClient, HttpParams } from '@angular/common/http';
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

  getManageJustJob() {
    return this.http.get(environment.APIURL + '/getManageJustJob.php');
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

  getUserPosition() {
    return this.http.get(environment.APIURL + '/getUserPosition.php');
  }

  getDepartment() {
    return this.http.get(environment.APIURL + '/getDepartment.php');
  }

  getPriority() {
    return this.http.get(environment.APIURL + '/getPriority.php');
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

  checkMemoID(date: string, dept: string) {
    var params = new HttpParams().set('date', date).set('dept', dept);
    return this.http.get(environment.APIURL + '/checkMemoID.php', { params });
  }

  checkUserID(){
    return this.http.get(environment.APIURL + '/userID.php');
  }
  
  checkQtID(date: string, dept: string){
    var params = new HttpParams().set('date', date).set('dept', dept);
    return this.http.get(environment.APIURL + '/checkQtID.php', { params });
  }

  insertMemo(body: any) {
    return this.http.post(environment.APIURL + '/insertMemo.php', body);
  }

  insertQt(body: any) {
    return this.http.post(environment.APIURL + '/insertQt.php', body);
  }

  getProfile() {
    return this.http.get(environment.APIURL + '/getProfile.php');
  }


  insertUserPosition(body: string) {
    return this.http.post(environment.APIURL + '/insertUserPosition.php', body);
  }

  deleteUserPosition(id: string) {
    return this.http.post(environment.APIURL + '/deleteUserPosition.php', id);
  }

  insertDepartment(body: string) {
    return this.http.post(environment.APIURL + '/insertDepartment.php', body);
  }

  deleteDepartment(id: string) {
    return this.http.post(environment.APIURL + '/deleteDepartment.php', id);
  }

  registerUser(body: any) {
    return this.http.post(environment.APIURL + '/registerUser.php', body);
  }

  insertUserID(body:any){
    return this.http.post(environment.APIURL + '/insertUserID.php', body);
  }

  updatePriority(body: any) {
    return this.http.post(
      environment.APIURL + '/updatePriority.php',
      body
    );
  }

  updateRandomPassword(body:any) {
    return this.http.post(
      environment.APIURL + '/randomPassword.php',
      body
    );
  }

  deleteProfile(body:any) {
    return this.http.post(
      environment.APIURL + '/deleteProfile.php',
      body
    );
  }

}
