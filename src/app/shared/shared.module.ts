import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components

// PRIMENG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {InputMaskModule} from 'primeng/inputmask';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';

// services

import { FindService } from './find/find.service';
import { ToastService } from './message/message.service';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    InputMaskModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  exports: [
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    InputMaskModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [FindService, ToastService, MessageService]
})
export class SharedModule { }
