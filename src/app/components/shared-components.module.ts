import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
    declarations: [HeaderComponent, MensagemErroComponent, CmailListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, MensagemErroComponent, CmailListItemComponent]
})

export class SharedComponentModule { }
