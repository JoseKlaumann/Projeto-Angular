export class ApiIbgeMunicipios {
  id?: string;
  nome?: string;

  constructor(obj: Partial<ApiIbgeMunicipios>){
    Object.assign(this, obj);
  }

}
