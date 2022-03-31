import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from './interfaces/pokemon';
import { PokemonservicesService } from './services/pokemonservices.service';
import { forkJoin, Observable } from 'rxjs';



const starterPokemon = ["bulbasaur","squirtle","charmander","bulbasaur","squirtle","charmander","bulbasaur","squirtle","charmander"];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'pokemon';

  pokemonArr: Pokemon[] = new Array(0);
  userSelected:boolean=false;
  selectedPokemon !:Pokemon;
  pokemonObs$ !: Observable<Pokemon[]>;

  constructor(private pokemonservice:PokemonservicesService){

  }

  ngOnInit(): void {
    this.pokemonObs$ = forkJoin(
      starterPokemon.reduce((acc:any, pokemonName:string)=>{
        return [
          ...acc,
          this.pokemonservice.getPokemon(pokemonName.toLowerCase())
        ]
      },[]) ) as Observable<Pokemon[]>;
  }
    
  
  selected(pokemon:Pokemon){
    this.pokemonArr = new Array(0);
    this.selectedPokemon = pokemon;
    this.userSelected = true;
    console.log(pokemon);
  }
}
