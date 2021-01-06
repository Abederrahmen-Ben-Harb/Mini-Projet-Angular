import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path: "add-voiture", component : AddVoitureComponent},
  { path: "", redirectTo: "voitures", pathMatch: "full" },
  {path: "updateVoiture/:id", component: UpdateVoitureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
