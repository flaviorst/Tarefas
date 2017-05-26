import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TarefaAddPage } from '../pages/tarefa-add/tarefa-add';
import { TarefaListPage } from '../pages/tarefa-list/tarefa-list';
import firebase from 'firebase';
import { TarefaListItemComponent } from '../components/tarefa-list-item/tarefa-list-item';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { LovProvider } from '../providers/lov/lov';

const firebaseConfig = {
    apiKey: "AIzaSyACA1qRW3nO7khW1qq6EvWxWTDyi9tfjTQ",
    authDomain: "listatarefas-a966b.firebaseapp.com",
    databaseURL: "https://listatarefas-a966b.firebaseio.com",
    projectId: "listatarefas-a966b",
    storageBucket: "listatarefas-a966b.appspot.com",
    messagingSenderId: "516688017252"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaAddPage,
    TarefaListPage,
    TarefaListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaAddPage,
    TarefaListPage,
    TarefaListItemComponent
  ],
  providers: [
    LoginProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefaProvider,
    LovProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
