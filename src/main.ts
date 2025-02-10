import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { HeroComponent } from './app/hero/hero.component';
import { CarsListsComponent } from './app/cars-lists/cars-lists.component';
import { FormComponent } from './app/form/form.component';

@Component({
  selector: 'app-root',
  imports:[HeaderComponent,FooterComponent,HeroComponent,CarsListsComponent,FormComponent],
  template: `
   <app-header></app-header>
   <main>
    <app-hero></app-hero>
    <app-cars-lists></app-cars-lists>
    <app-form></app-form>
   </main>
   <app-footer></app-footer>
  
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
