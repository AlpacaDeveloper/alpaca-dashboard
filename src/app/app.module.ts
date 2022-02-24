import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
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
import { TraineeJobAppComponent } from './pages/trainee-dashboard/trainee-job-app/trainee-job-app.component';
import { TraineeDashboardComponent } from './pages/trainee-dashboard/trainee-dashboard.component'; 
import { TraineeSingleComponent} from './pages/trainee-dashboard/trainee-single/trainee-single.component'




registerLocaleData(th);

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
    TraineeSingleComponent
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
    NzToolTipModule


    
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
