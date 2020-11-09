import { Component } from '@angular/core';

@Component({
  selector: 'cmail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isNewEmailFormOpen = false;
  get isNewEmailFormOpen(): boolean {
    return this._isNewEmailFormOpen;
  }
  toggleNewEmailForm(): void {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }
}
