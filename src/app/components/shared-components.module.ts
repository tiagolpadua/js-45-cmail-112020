import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';

@NgModule({
    declarations: [HeaderComponent, MensagemErroComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, MensagemErroComponent]
})

export class SharedComponentModule { }
