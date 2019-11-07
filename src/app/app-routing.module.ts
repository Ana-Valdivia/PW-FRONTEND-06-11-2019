import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetosComponent } from './novo-projetos/novo-projetos.component';

const routes: Routes = [

    {
      path : 'projetos',
      component : ListaProjetosComponent
           

     

    },

    {
      path : 'novoprojeto',
      component : NovoProjetosComponent
    }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
