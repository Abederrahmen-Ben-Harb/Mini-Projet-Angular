import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 



const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voitures : Voiture[]; //un tableau de Voiture
  voiture : Voiture;

  apiURL: string = 'http://localhost:8080/voiture/api'

  constructor(private http : HttpClient)
   {
    
   }


   listeVoitures():Observable<Voiture[]>{
      return this.http.get<Voiture[]>(this.apiURL);
    }


   ajouterVoiture( voit: Voiture):Observable<Voiture>{ 
    return this.http.post<Voiture>(this.apiURL, voit, httpOptions);
    }

    supprimerVoiture( id : number){
      //supprimer la voiture voit du tableau voitures
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      //ou Bien
      /* this.voitures.forEach((cur, index) => {
      if(voit.idVoiture === cur.idVoiture) {
      this.voitures.splice(index, 1);
      }
      }); */


      consulterVoiture(id:number): Observable<Voiture> { 
        const url = `${this.apiURL}/${id}`; 
        return this.http.get<Voiture>(url);
      }


      trierVoitures(){ 
        this.voitures = this.voitures.sort((n1,n2) => {
           if (n1.idVoiture > n2.idVoiture) { 
             return 1; } 
           if (n1.idVoiture < n2.idVoiture) { 
               return -1; } 
           return 0; }); }


      updateVoiture(v:Voiture)  : Observable<Voiture>
      { return this.http.put<Voiture>(this.apiURL, v, httpOptions);
      }


}
