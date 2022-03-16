import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIbgeMunicipios } from 'src/app/models/api-ibge-municipios';
import { ApiIbgeMunicipiosService } from 'src/app/services/api-ibge-municipios.service';

@Component({
  selector: 'app-search-uf',
  templateUrl: './search-uf.component.html',
  styleUrls: ['./search-uf.component.scss']
})
export class SearchUfComponent implements OnInit {

  cidades$ = new Observable<ApiIbgeMunicipios[]>();
  constructor(private ibgeService: ApiIbgeMunicipiosService) { }

  ngOnInit(): void {
  }

  loadMunicipiosByUf(event: any){
    const uf = (event.target as HTMLSelectElement)?.value;
    // console.log(uf.value);
    if (uf){
      this.cidades$ = this.ibgeService.getCidadesByUf(uf)
      this.ibgeService
          .getCidadesByUf(uf)
          .subscribe(
            (response) => {
              console.log(response);
            }
          );
    }
  }
}
