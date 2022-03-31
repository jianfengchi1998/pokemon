import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import * as pokemon from '../../interfaces/pokemon'

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {

  @Input() myPokemon !: pokemon.Pokemon;
  @Output() selectedEmitter:EventEmitter<pokemon.Pokemon> = new EventEmitter();

  isVisible:boolean = false;


  constructor(private cdr:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
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
