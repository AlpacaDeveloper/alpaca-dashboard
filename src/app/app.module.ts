import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { th_TH } from 'ng-zorro-antd/i18n';
import { DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LoginComponent } from './pages/login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { MainComponent } from './main/main.component';
import { ManageJobAppComponent } from './pages/manage-jobApp/manage-jobApp.component';
import { TableViewComponent } from './pages/dashboard/table-view/table-view.component';
import { SingleViewComponent } from './pages/dashboard/single-view/single-view.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TraineeJobAppComponent } from './pages/trainee-dashboard/trainee-job-app/trainee-job-app.component';
import { TraineeDashboardComponent } from './pages/trainee-dashboard/trainee-dashboard.component';
import { TraineeSingleComponent } from './pages/trainee-dashboard/trainee-single/trainee-single.component';
import { MemoComponent } from './pages/memo/memo.component';
import { NgxPrintModule } from 'ngx-print';
import { FormApplicationComponent } from './pages/form-application/form-application.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LOCALE_ID } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileTableComponent } from './pages/profile/profile-table/profile-table.component';
import { ProfileSingleComponent } from './pages/profile/profile-single/profile-single.component';
import { RegisterComponent } from './pages/register/register.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';
import { SuperadminComponent } from './pages/superadmin/superadmin.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { QuotationComponent } from './pages/quotation/quotation.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    ManageJobAppComponent,
    TableViewComponent,
    SingleViewComponent,
    TraineeJobAppComponent,
    TraineeDashboardComponent,
    TraineeSingleComponent,
    MemoComponent,
    FormApplicationComponent,
    ProfileComponent,
    ProfileTableComponent,
    ProfileSingleComponent,
    RegisterComponent,
    PersonalProfileComponent,
    SuperadminComponent,
    QuotationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzDescriptionsModule,
    NzPaginationModule,
    NzToolTipModule,
    NzGridModule,
    NgxPrintModule,
    NzSelectModule,
    NzDatePickerModule,
    NzAlertModule,
    NzMessageModule,
    NzDropDownModule,
    NzUploadModule,
    NzPopconfirmModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: th_TH },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
