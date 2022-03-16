import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiIbgeMunicipios } from '../models/api-ibge-municipios';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeMunicipiosService {

  constructor(private http: HttpClient) { }

  getCidadesByUf(uf:string){
    const url = `${environment.urlApiCidades}/${uf}/municipios`;
    return this.http.get<ApiIbgeMunicipios[]>(url);
  }
}
