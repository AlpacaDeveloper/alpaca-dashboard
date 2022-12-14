import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormApplicationComponent } from './pages/form-application/form-application.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageJobAppComponent} from './pages/manage-jobApp/manage-jobApp.component';
import { MemoComponent } from './pages/memo/memo.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TraineeDashboardComponent } from './pages/trainee-dashboard/trainee-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';
import { SuperadminComponent } from './pages/superadmin/superadmin.component';
import { QuotationComponent } from './pages/quotation/quotation.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    component:MainComponent,
    children: [
      // {path: '', redirectTo: '/personalprofile'},
      { path: '', component: PersonalProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'managejobapp', component: ManageJobAppComponent },
      { path: 'traineedashboard', component: TraineeDashboardComponent },
      { path: 'memo', component: MemoComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'formapplication', component: FormApplicationComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'personalprofile', component: PersonalProfileComponent},
      { path: 'superadmin', component: SuperadminComponent},
      { path: 'quotation', component: QuotationComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
