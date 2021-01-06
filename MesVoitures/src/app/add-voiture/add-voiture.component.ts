import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  constructor(private voitureService : VoitureService,
    private router :Router) { }

  addVoiture(){ 
    //console.log(this.newVoiture); 
    this.voitureService.ajouterVoiture(this.newVoiture)
    .subscribe(voit => { 
      console.log(voit); 
      }); 
      this.router.navigate(['voitures']);
  }

  ngOnInit(): void {
  }

}
