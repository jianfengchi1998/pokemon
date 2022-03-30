import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import * as pokemon from '../../interfaces/pokemon'

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {

  @Input() myPokemon !: pokemon.PokemonResponse;
  @Output() selectedEmitter:EventEmitter<pokemon.PokemonResponse> = new EventEmitter();
  abilities?: pokemon.Ability[];
  base_experience?: number;
  forms?: pokemon.Form[];
  game_indicies?: any[];
  height?: number;
  held_items?: pokemon.Item[];
  id?: number;
  is_default?: boolean;
  location_area_encounters!: string;
  moves?: pokemon.Move[];
  species?: pokemon.Specie;
  sprites?: pokemon.Sprite;
  stats?: pokemon.Stat[];
  types?: pokemon.Type[];
  weight?: number;

  isVisible:boolean = false;


  constructor(private cdr:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
      this.abilities = this.myPokemon.abilities;
      this.base_experience = this.myPokemon.base_experience;
      this.forms = this.myPokemon.forms;
      this.game_indicies = this.myPokemon.game_indicies;
      this.height = this.myPokemon.height;
      this.held_items = this.myPokemon.held_items;
      this.id = this.myPokemon.id;
      this.is_default = this.myPokemon.is_default;
      this.location_area_encounters = this.myPokemon.location_area_encounters;
      this.moves = this.myPokemon.moves
      this.species = this.myPokemon.species;
      this.sprites = this.myPokemon.sprites;
      this.stats = this.myPokemon.stats;
      this.types  = this.myPokemon.types;
      this.weight = this.myPokemon.weight;
  }

  handleCancel(){
    this.isVisible = false;
  }

  handleOk(){
    this.isVisible = false;
    this.selectedEmitter.emit(this.myPokemon);
  }

  select(){
    this.isVisible = true;
  }
}
