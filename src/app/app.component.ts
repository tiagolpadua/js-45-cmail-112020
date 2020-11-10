import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isNewEmailFormOpen = false;

  emailList = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };

  get isNewEmailFormOpen(): boolean {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(): void {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm): void {
    if (formEmail.invalid) {
      return;
    }
    this.emailList.push(this.email);
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    };
    formEmail.reset();
  }
}
