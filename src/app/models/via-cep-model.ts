export class ViaCepModel {
  cep?:         string;
  logradouro?:  string;
  complemento?: string;
  bairro?:      string;
  localidade?:  string;
  uf?:          string;
  ibge?:        string;
  gia?:         string;
  ddd?:         string;
  siafi?:       string;
  numero?:      number;

  constructor(object: Partial<ViaCepModel>) {
    // Tem objeto, e pode receber os dados parcialmente
    //  e esse construtor interpreta e passa apenas aqueles dados que eu pedir
    // Ele fica dinâmico
    Object.assign(this, object);
  }
}
