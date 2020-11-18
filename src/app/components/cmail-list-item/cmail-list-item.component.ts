import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: [
  ]
})
export class CmailListItemComponent implements OnInit {
  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output() eventoVaiRemover = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  removeEmail(click: Event): void {
    if (confirm('Tem certeza?')) {
      this.eventoVaiRemover.emit({ status: 'removing' });
    }
  }
}
