import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferSearchComponent } from './offer-search/offer-search.component';
import {OffersRoutingModule} from "./offers-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OfferListComponent,
   OfferSearchComponent,
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class OffersModule { }
