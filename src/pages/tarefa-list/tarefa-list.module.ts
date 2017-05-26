import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefaListPage } from './tarefa-list';

@NgModule({
  declarations: [
    TarefaListPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefaListPage),
  ],
  exports: [
    TarefaListPage
  ]
})
export class TarefaListPageModule {}
