import { Component, Input } from '@angular/core';
import { Tarefa } from '../../models/tarefas';


@Component({
  selector: 'tarefa-list-item',
  templateUrl: 'tarefa-list-item.html'
})
export class TarefaListItemComponent {

  @Input()
  tarefa:Tarefa;
}
