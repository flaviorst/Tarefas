import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefaAddPage } from './tarefa-add';

@NgModule({
  declarations: [
    TarefaAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefaAddPage),
  ],
  exports: [
    TarefaAddPage
  ]
})
export class TarefaAddPageModule {}
