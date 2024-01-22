import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <button (click)="teste()">teste</button>
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: []
})
export class AppComponent implements DoCheck, OnInit, AfterContentChecked{
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  
  title = 'angular15';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log("Do check")
  }

  teste(){
    this.title = "teste"
  }
}
