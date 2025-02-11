import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-item',
  imports: [],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css'
})
export class CarItemComponent {

  @Input() car!:{title:string,image:string,text:string,prices:number[]};

  @Output() carTitle:EventEmitter<string>= new EventEmitter();


  addToForm(title:string){
      this.carTitle.emit(title)
  }
}
