import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-messages/ticket-list.component';
import { TicketDetailComponent } from './tickets-list/ticket-detail.component';
import {AddTicketComponent} from "./add-ticket/add-ticket.component";
import {SupportAdminComponent} from "./support-admin/support-admin.component";
import {SupportAdminChatComponent} from "./support-admin-chat/support-admin-chat.component";

const routes: Routes = [
  { path: 'client-tickets', component: TicketDetailComponent },
  { path: 'client-tickets/:ticketId/messages', component: TicketListComponent },
  { path: 'client-tickets/add-ticket', component: AddTicketComponent },
  { path: 'admin-tickets', component: SupportAdminComponent },
  { path: 'admin-tickets/:ticketId/messages', component: SupportAdminChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}
