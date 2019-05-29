import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from './auth.service';
import { AddressComponent } from './address/address.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabModule} from 'angular-tabs-component';

var firebaseConfig = {
    apiKey: "AIzaSyBS05whFCY7EE5EG_zo_ZoYP5F0rLZa7Qo",
    authDomain: "zoomfirebaseauth.firebaseapp.com",
    databaseURL: "https://zoomfirebaseauth.firebaseio.com",
    projectId: "zoomfirebaseauth",
    storageBucket: "zoomfirebaseauth.appspot.com",
    messagingSenderId: "823109761112",
    appId: "1:823109761112:web:0335eff85a548c5f"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    AddressComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    TabModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
