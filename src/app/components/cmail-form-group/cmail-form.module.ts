import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmailFormFieldDirective } from './cmail-form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group.component';

@NgModule({
    declarations: [CmailFormGroupComponent, CmailFormFieldDirective],
    imports: [CommonModule],
    exports: [CmailFormGroupComponent, CmailFormFieldDirective]
})

export class CMailFormModule { }
