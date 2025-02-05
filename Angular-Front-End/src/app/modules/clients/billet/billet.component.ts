import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Reservation {
  idReservation: number;
  numeroPlace: number;
  dateReservation: string;
  statut: string;
  vol: {
    villeDepart: string;
    villeDestination: string;
    heureDepart: string;
    heureArrivee: string;
    prix: number;
    statut: string;
    nameVol: string;
    companyName: string;
  };
  paiement: {
    methodePaiement: string;
    montant: number;
    datePaiement: string;
  } | null;
  client: {
    nom: string;
    telephone: string;
  };
}

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.css']
})
export class BilletComponent implements OnInit {
  @Input() reservationId: number = 3; // Default reservation ID
  reservation: Reservation | null = null;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadReservationDetails();
  }

  getReservationById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:9093/reservations/${id}`);
  }

  loadReservationDetails(): void {
    this.getReservationById(this.reservationId).subscribe({
      next: (reservation) => {
        this.reservation = reservation;
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors du chargement des détails de la réservation.';
        console.error(err);
      }
    });
  }
}
