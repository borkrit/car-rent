import { Component } from '@angular/core';
import { CarItemComponent } from './car-item/car-item.component';

@Component({
  selector: 'app-cars-lists',
  imports: [CarItemComponent],
  templateUrl: './cars-lists.component.html',
  styleUrl: './cars-lists.component.css'
})
export class CarsListsComponent {

   carsItems=[
    {
      "image": "https://testologia.ru/cars-images/1.png",
      "title": "BMW M4 Competition",
      "text": "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
      "prices": [1450, 1300, 1100]
    },
    {
      "image": "https://testologia.ru/cars-images/2.png",
      "title": "BMW M5",
      "text": "Бизнес-класс с душой гонщика. BMW M5: 600 л.с., интеллектуальный полный привод и комфорт для самых требовательных.",
      "prices": [1600, 1450, 1250]
    },
    {
      "image": "https://testologia.ru/cars-images/3.png",
      "title": "Lamborghini Huracan Spyder Green",
      "text": "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для ярких приключений.",
      "prices": [3200, 2900, 2600]
    },
    {
      "image": "https://testologia.ru/cars-images/4.png",
      "title": "Ferrari F8 Spider",
      "text": "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
      "prices": [3500, 3200, 2900]
    },
    {
      "image": "https://testologia.ru/cars-images/5.png",
      "title": "Porsche 911 Targa 4S Yellow",
      "text": "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa.",
      "prices": [1800, 1650, 1450]
    },
    {
      "image": "https://testologia.ru/cars-images/6.png",
      "title": "Mercedes SL 55 AMG",
      "text": "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
      "prices": [1700, 1550, 1350]
    },
    {
      "image": "https://testologia.ru/cars-images/7.png",
      "title": "BMW Z4",
      "text": "Компактный кабриолет для стильных путешествий. BMW Z4: идеальный союз маневренности, мощности и элегантного дизайна.",
      "prices": [1200, 1100, 950]
    },
    {
      "image": "https://testologia.ru/cars-images/8.png",
      "title": "Mercedes C180 Convertible",
      "text": "Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.",
      "prices": [1000, 900, 800]
    },
    {
      "image": "https://testologia.ru/cars-images/9.png",
      "title": "Chevrolet Corvette Orange",
      "text": "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.",
      "prices": [1400, 1250, 1100]
    }
  ]

  selectedCars:object[] = []
  carsFilter=[
    {
      active:true,
      name:'Все марки'
    
    },
    {
      active:false,
      name:'Lamborghini'
    
    },
    {
      active:false,
      name:'Ferrari'
    
    },
    {
      active:false,
      name:'Porsche'
    
    },
    {
      active:false,
      name:'BMW '
    
    },
    {
      active:false,
      name:'Mercedes'
    
    }

  ]

  ngOnInit(){
    this.selectedCars = this.carsItems
  }

  selectFilterItem(name:string){
    
  }


}
