import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string  ='Eduardo';
  constructor(){
    console.log('constructor executed');
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];
      const current = change.currentValue;
      const previous = change.previousValue;
      console.log(`Property ${propName} changed: previous = ${previous}, current = ${current}`);
    }
  }
 
  OnChanges(): void {
    console.log('OnChanges executed');
  }

  ngOnInit(): void {
    this.nome = `ola ${this.nome}`;
    console.log('ngOnInit executed');
  }
}
