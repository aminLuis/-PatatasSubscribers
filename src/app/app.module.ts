import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListSubscribersComponent } from './pages/list-subscribers/list-subscribers.component';
import { CreatSusbcriberComponent } from './pages/creat-susbcriber/creat-susbcriber.component';
import { BodyComponent } from './body/body.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormSusbcriberComponent } from './pages/creat-susbcriber/form-susbcriber/form-susbcriber.component';
import { MatInputModule } from '@angular/material/input';
import { TableSusbcribersComponent } from './pages/creat-susbcriber/table-susbcribers/table-susbcribers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListSubscribersComponent,
    CreatSusbcriberComponent,
    BodyComponent,
    FormSusbcriberComponent,
    TableSusbcribersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
