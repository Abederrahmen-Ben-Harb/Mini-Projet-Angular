import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
})
export class VoituresComponent implements OnInit {

  voitures : Voiture[]; //un tableau de Voiture

  constructor(private voitureService : VoitureService,
    private router :Router) {
    //this.voitures = voitureService.listeVoitures();
   }

   supprimerVoiture(v: Voiture) {
    //console.log(v); 
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => { 
        console.log("voiture supprimé");
        this.SuprimerVoitureDuTableau(v); 
      }); 
    }

  ngOnInit(): void {
    this.voitureService.listeVoitures().subscribe(voits => { 
      console.log(voits); 
      this.voitures = voits; 
    });
  }


  SuprimerVoitureDuTableau(voit : Voiture) {
     this.voitures.forEach((cur, index) => { 
       if(voit.idVoiture=== cur.idVoiture) { 
         this.voitures.splice(index, 1); } }); }

}
