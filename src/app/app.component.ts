import { Component } from '@angular/core';

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

  handleNewEmail(event: Event): void {
    event.preventDefault();
    this.emailList.push(this.email);
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    };
  }
}
