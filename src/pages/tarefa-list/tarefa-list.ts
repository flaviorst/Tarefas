import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarefa } from '../../models/tarefas';
import {TarefaProvider} from '../../providers/tarefa/tarefa';
import { TarefaAddPage } from '../tarefa-add/tarefa-add';

@IonicPage()
@Component({
  selector: 'page-tarefa-list',
  templateUrl: 'tarefa-list.html',
})
export class TarefaListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tarefasProvider: TarefaProvider,
    public toastCtrl: ToastController,
    public ngZone: NgZone) {

    this.tarefas = new Array();
  }

  ionViewDidLoad() {

    this.tarefasProvider.reference.on('child_removed', (snapshot)=>{
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa ' + tarefaRemovida.titulo + ' removida!',
        duration: 3000
      }).present();
    })


    this.tarefasProvider.reference.on('value', (snapshot) =>{
      this.ngZone.run( ()=> {
        let innerArray = new Array();
        snapshot.forEach(elemento =>  {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefaAddPage, {'tarefa' : tarefa});
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefaAddPage, {'tarefa' : new Tarefa()});
  }

  deletarTarefa(tarefa:Tarefa){
    this.tarefasProvider.delete(tarefa).then(
      sucesso => console.log('tarefa deletada')
    )
    .catch(
      error => console.log('nao foi possivel deletar a tarefa')
    )
  }

}
