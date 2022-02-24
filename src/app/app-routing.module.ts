import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageJobAppComponent} from './pages/manage-jobApp/manage-jobApp.component';
import { TraineeDashboardComponent } from './pages/trainee-dashboard/trainee-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'managejobapp', component: ManageJobAppComponent },
      { path: 'traineedashboard', component: TraineeDashboardComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
