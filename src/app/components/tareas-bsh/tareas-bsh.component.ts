import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'BSH-app-tareas-bsh',
  templateUrl: './tareas-bsh.component.html',
  styleUrls: ['./tareas-bsh.component.css']
})
export class TareasBSHComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';


  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
    //console.log(this.nombreTarea);
    //Crear el objeto Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //Agregar el objeto tarea al array = listTareas
    this.listTareas.push(tarea);

    //Resetear form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    //console.log('A borrar:' + index);
    this.listTareas.splice(index, 1);
  }
}