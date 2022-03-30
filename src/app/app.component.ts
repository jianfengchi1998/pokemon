import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from './interfaces/pokemon';
import { PokemonservicesService } from './services/pokemonservices.service';
import { Observable } from 'rxjs';



const starterPokemon = ["bulbasaur","squirtle","charmander","bulbasaur","squirtle","charmander","bulbasaur","squirtle","charmander"];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'pokemon';

  pokemonArr: PokemonResponse[] = new Array(0);
  userSelected:boolean=false;
  selectedPokemon !:PokemonResponse;

  constructor(private pokemonservice:PokemonservicesService){

  }

  ngOnInit(): void {

    starterPokemon.forEach(element => {
      this.pokemonservice.getPokemon(element).subscribe(
        data=>{this.pokemonArr.push(data)}
      )
    });
  }
    
  
  selected(pokemon:PokemonResponse){
    this.pokemonArr = new Array(0);
    this.selectedPokemon = pokemon;
    this.userSelected = true;
    console.log(pokemon);
  }
}
