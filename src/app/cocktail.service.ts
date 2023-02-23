import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

public cocktailList: Cocktail[];

constructor() { 
  this.cocktailList = [
    new Cocktail("coca", 10, 'ceci est l\'image du coca'),
    new Cocktail("sex on the beach", 20, "ceci est l\'image du onTheBeach"),
    new Cocktail("perroquet", 15, "ceci est l\'image du Perroquet")
  ]
 }

public getCocktails(){
  return this.cocktailList
}

}
