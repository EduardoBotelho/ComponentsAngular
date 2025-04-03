import { Component,
   OnInit,
   DoCheck,
   AfterContentChecked,
  AfterContentInit,
AfterViewChecked,
AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements
  OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,OnDestroy
{
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
   quantidade: number = 0;

   //quando o evento é iniciado
  ngOnInit(): void {
    console.log('OnInit: Component initialized.');
  }
  aumentar(): void {
    this.quantidade +=1;
  }
  decrementar(): void {
    this.quantidade -=1;
  }

  ngDoCheck(): void {
    this.quantidade++;
   }

  ngAfterContentInit(): void {
    console.log('AfterContentInit: Content initialized.');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked: Content checked.');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit: View initialized.');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked: View checked.');
  }
  
}
