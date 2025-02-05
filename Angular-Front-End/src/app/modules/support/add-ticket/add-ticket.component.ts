import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  ticketForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {

    this.ticketForm = this.fb.group({
      sujet: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const newTicket = {
        sujet: this.ticketForm.value.sujet,
        description: this.ticketForm.value.description,
        statut: 'opened',
        dateCreation: new Date().toISOString(),
        dateMiseAJour: new Date().toISOString(),
        idClient: 3
      };

      this.http.post('http://localhost:9094/stickets', newTicket).subscribe({
        next: () => {
          console.log('Ticket created successfully');
          // Optionally, reset the form or navigate to another page
          this.ticketForm.reset();
          this.router.navigate([`/support/client-tickets`]);
        },
        error: (err) => {
          this.errorMessage = 'Une erreur est survenue lors de la création du ticket.';
          console.error(err);
        }
      });
    }
  }
}
