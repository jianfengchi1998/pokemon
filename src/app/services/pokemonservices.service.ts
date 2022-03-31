import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../interfaces/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const url:string = "https://pokeapi.co/api/v2/pokemon/"

@Injectable({
  providedIn: 'root'
})
export class PokemonservicesService {

  constructor(private https:HttpClient) { 
  }

  getPokemon(name:string){
    return this.https.get<PokemonResponse>(url+name).pipe(
      map(
        (pokemonresponse)=>{
          const POKEMON = {
            id:pokemonresponse.id,
            height:pokemonresponse.height,
            weight:pokemonresponse.weight,
            typeArr:pokemonresponse.types,
            frontimg:pokemonresponse.sprites.front_default,
            species:pokemonresponse.species,
          }
          return POKEMON;
        }
      )
    )
  }

}
