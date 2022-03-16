import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ViaCepModel } from 'src/app/models/via-cep-model';
import { ViaCepApiService } from 'src/app/services/via-cep-api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // Objeto que transita de um lado para o outro
  formContato: ViaCepModel = {};

  showForm = new Subject<boolean>();

  // Injetamos o serviço que foi criado
  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep: FocusEvent){
    if ((cep.target as HTMLInputElement)?.value){
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCep(inputCEP);
      cepResponse.subscribe(
          (cepModel) => {
            this.formContato = cepModel
            this.showForm.next(true);
        }
      )
    }
  }
}
