import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { CMailFormModule } from './components/cmail-form-group/cmail-form.module';
import { SharedComponentModule } from './components/shared-components.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CaixaDeEntradaModule,
    CadastroModule,
    LoginModule,
    BrowserModule,
    ModuloRoteamento,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
