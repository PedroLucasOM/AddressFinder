import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(message: any) {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: message});
  }

  showError(error: any) {
    console.log(error.status);
    if (error.status === 404) {
      this.messageService.add({severity: 'warn',
        summary: error.status, detail: 'Endereço não encontrado! Verifique se o CEP informado é válido.'});
    } else {
      this.messageService.add({severity: 'error', summary: error.status, detail: error.message});
    }
  }
}
