import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {ClientsRoutingModule} from "./clients-routing.module";
import { FormsModule } from '@angular/forms';
import { authGuard} from "../../core/auth.guard";
import { ListComponent } from './list/list.component';
import {MessageService} from "primeng/api";
import { BilletComponent } from './billet/billet.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ListComponent,
    BilletComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ],
  providers: [
    MessageService // Ajoutez ceci ici
  ],
})
export class ClientsModule { }
