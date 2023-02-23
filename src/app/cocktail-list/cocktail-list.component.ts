import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails : Cocktail[];

  constructor(public cocktailService: CocktailService) { 
    this.cocktails = cocktailService.cocktailList;
  }

  ngOnInit() {
  }

}
