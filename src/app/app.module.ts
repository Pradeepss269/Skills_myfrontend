import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { SideBarComponent } from './includes/side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeMenuComponent } from './includes/home-menu/home-menu.component';
import { Tab1Component } from './dashboard/tab1/tab1.component';
import { Tab2Component } from './dashboard/tab2/tab2.component';
import { Tab3Component } from './dashboard/tab3/tab3.component';
import { Tab4Component } from './dashboard/tab4/tab4.component';
import { Tab5Component } from './dashboard/tab5/tab5.component';
import { NgChartsModule } from 'ng2-charts';
import { AddFormComponent } from './dashboard/tab1/add-form/add-form.component';
import { DataTableComponent } from './dashboard/tab1/data-table/data-table.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    HomeMenuComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    Tab5Component,
    AddFormComponent,
    DataTableComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
