import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar'
import { LoginProvider } from '../../providers/login/login';
import { Credencial } from '../../models/credencial';
import { TarefaListPage } from '../tarefa-list/tarefa-list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credencial:Credencial

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {
    this.credencial = new Credencial;
  }

  ionViewDidLoad() {

    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user=> this.navCtrl.setRoot(TarefaListPage)
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error=> console.log(error)
    )
  }

  longinComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComGoogle (){
    this.loginProvider.loginComGoogle();
  }

  loginComFacebook (){
    this.loginProvider.loginComFacebook();
  }

  doRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }

  sair(){
    this.loginProvider.sair();
  }

}
