import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl(),
    username: new FormControl(),
    senha: new FormControl(),
    avatar: new FormControl(),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  handleCadastrarUsuario(): void {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
    } else {
      console.log('Campos precisam ser preenchidos!');
    }
  }
}
