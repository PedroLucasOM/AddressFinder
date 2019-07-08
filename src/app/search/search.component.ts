import { ToastService } from './../shared/message/message.service';
import { Component, OnInit } from '@angular/core';
import { FindService } from './../shared/find/find.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cep = '';
  endereco: any = [];
  flagEnderecoPreenchido = false;
  flagCarregando = false;

  constructor(private findService: FindService, private messageService: ToastService) { }

  ngOnInit() {
  }

  onFindPathByCEP() {
    this.flagCarregando = true;
    this.findService.onFindPathByCEP(this.cep).then(
      response => {
        this.endereco = response;
        this.flagEnderecoPreenchido = true;
        this.flagCarregando = false;
        this.messageService.showSuccess('Endereço encontrado!');
      },
      error => {
        this.flagEnderecoPreenchido = false;
        this.flagCarregando = false;
        this.messageService.showError(error);
      });
  }

  onClear() {
    this.cep = '';
    this.endereco = [];
    this.flagEnderecoPreenchido = false;
    this.flagCarregando = false;
  }

}
