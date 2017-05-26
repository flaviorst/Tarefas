import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Tarefa } from '../../models/tarefas';
import { LovProvider } from '../../providers/lov/lov';
import { TarefaProvider } from '../../providers/tarefa/tarefa';
import { EstadoTarefa } from '../../models/tarefa-estado';


@IonicPage()
@Component({
  selector: 'page-tarefa-add',
  templateUrl: 'tarefa-add.html',
})
export class TarefaAddPage {

  tarefa:Tarefa;
  tarefaForm:FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public fb: FormBuilder,
    public tarefaProvider:TarefaProvider,
    public lovProvider: LovProvider) {

    this.tarefa = new Tarefa();
    this.initialize();
  }


  private initialize(){
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }

    this.tarefaForm = this.fb.group({
      'titulo' : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'descricao' : [''],
      'estadoTarefa' : ['', Validators.required]
    });
  }

  ionViewDidLoad() {

  }

  getEstadoTarefa(estadoTarefa:EstadoTarefa) :string{
    return EstadoTarefa[estadoTarefa];
  }

  salvarTarefa(){
    this.tarefaProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

}
