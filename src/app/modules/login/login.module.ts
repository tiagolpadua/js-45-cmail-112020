import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CMailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, LoginRoutingModule, CMailFormModule, FormsModule, HttpClientModule]
})

export class LoginModule { }
