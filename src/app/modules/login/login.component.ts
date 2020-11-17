import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  mensagemErro: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }

  handleLogin(formLogin: NgForm): void {
    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response: any) => {
            localStorage.setItem('cmail-token', response.token);
          },
          (responseError: HttpErrorResponse) => {
            this.mensagemErro = responseError.error.body;
          }
        );
    }
  }
}
