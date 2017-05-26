import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefaListItemComponent } from './tarefa-list-item';

@NgModule({
  declarations: [
    TarefaListItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(TarefaListItemComponent),
  ],
  exports: [
    TarefaListItemComponent
  ]
})
export class TarefaListItemComponentModule {}
