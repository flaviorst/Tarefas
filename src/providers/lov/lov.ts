import { Injectable } from '@angular/core';
import { EstadoTarefa } from '../../models/tarefa-estado';
import 'rxjs/add/operator/map';


@Injectable()
export class LovProvider {

  getTarefaState():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA, EstadoTarefa.EXECUTANDO, EstadoTarefa.FINALIZADO]
  }

}
