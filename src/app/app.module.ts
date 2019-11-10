import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

var firebaseconfig = {
  apiKey: "AIzaSyBmRhh11EXzCvStuXqMnXNxaiLlAGCyoB8",
  authDomain: "stolenlunches.firebaseapp.com",
  databaseURL: "https://stolenlunches.firebaseio.com",
  projectId: "stolenlunches",
  storageBucket: "",
  messagingSenderId: "40204549425",
  appId: "1:40204549425:web:2adb085688e9e0b3"
};

firebase.initializeApp(firebaseconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseconfig),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
