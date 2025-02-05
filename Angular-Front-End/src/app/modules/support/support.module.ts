import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-messages/ticket-list.component';
import { TicketDetailComponent } from './tickets-list/ticket-detail.component';
import {SupportRoutingModule} from "./support-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SupportAdminComponent } from './support-admin/support-admin.component';
import { SupportAdminChatComponent } from './support-admin-chat/support-admin-chat.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';



@NgModule({
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    SupportAdminComponent,
    SupportAdminChatComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SupportModule { }
