import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
   projetos = [{"nome":"projeto 1","sala":"lab8","turma":"2Q"},
               {"nome":"projeto 2","sala":"lab7","turma":"3Q"}]
              ;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  detalhes(id:number){
    this.router.navigate(['detalheprojeto',id]);
  }

}
