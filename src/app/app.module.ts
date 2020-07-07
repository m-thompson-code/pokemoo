import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipeModule } from '@app/pipes';

import * as firebase from 'firebase/app';

import 'firebase/analytics';

import 'firebase/auth';
// import 'firebase/database';
import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/messaging';
// import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyC-XbXvKTmyqfiO7xt13jf-f-CSTO22y_A",
    authDomain: "pokemoo-27298.firebaseapp.com",
    databaseURL: "https://pokemoo-27298.firebaseio.com",
    projectId: "pokemoo-27298",
    storageBucket: "pokemoo-27298.appspot.com",
    messagingSenderId: "258908291024",
    appId: "1:258908291024:web:4628976cb70190fff503d5",
    measurementId: "G-9T1LPRM09B"
  };

// Initialize Firebase web SDK
firebase.initializeApp(firebaseConfig);

firebase.analytics();

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PipeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
