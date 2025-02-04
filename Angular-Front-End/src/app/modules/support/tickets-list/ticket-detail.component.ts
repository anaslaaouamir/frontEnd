import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupportService } from '../../../services/support.service';
import {HttpClient} from "@angular/common/http";

interface Ticket {
  idTicket: number; // Add this field to match your data structure
  sujet: string; // Subject of the issue
  description: string; // Detailed description
  statut: string; // Status (e.g., Open, In Progress, Resolved)
  dateCreation: string | null; // Creation date
}

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  tickets: Ticket[] = [];
  clientId = 3; // Manually set the client ID
  loading = true;
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private supportService: SupportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    this.errorMessage = '';

    this.supportService.getTicketsByClientId(this.clientId).subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors du chargement des tickets.';
        console.error(err);
        this.loading = false;
      },
    });
  }

  viewMessages(ticket: Ticket): void {
    this.router.navigate([`/support/client-tickets/${ticket.idTicket}/messages`]);
  }

  addTicket(): void {
    this.router.navigate([`/support/client-tickets/add-ticket`]);
  }

  supprimerTicket(ticket: Ticket): void {

    this.http.delete(`http://localhost:9094/stickets/${ticket.idTicket}`).subscribe({
      next: () => {
        console.log('Ticket deleted successfully');
        window.location.reload();
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors de suppression du ticket.';
        console.error(err);
      }
    });
  }
}
