import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

apiURL: string ="http://quiteriaetec.somee.com/api/";

  constructor(private httpClient: HttpClient) { }
  handleError(error)
  {

let errorMensagem = `Codigo de erro:${error.status}\nMensagem: ${error.message}`;
alert (errorMensagem);
return throwError(errorMensagem);

  }
  
getProjetos():Observable<Projeto[]> {

return this.httpClient.get<Projeto[]>(this.apiURL+"Projetos")

}



}
