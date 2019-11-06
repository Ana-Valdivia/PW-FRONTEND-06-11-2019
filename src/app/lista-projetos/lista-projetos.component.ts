import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
   projetos = [{"nome":"projeto 1","sala":"lab8","turma":"2Q"},
               {"nome":"projeto 2","sala":"lab7","turma":"3Q"}]
              ;
  constructor() { }

  ngOnInit() {
  }

}
