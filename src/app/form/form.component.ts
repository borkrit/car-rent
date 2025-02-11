import {Component, inject, Input, SimpleChanges} from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  http=inject(HttpClient)

  @Input() titleCar:string ='' 

  orderForm = new FormGroup({
    car: new FormControl('',[Validators.required]),
    name:new FormControl(''),
    phone: new FormControl('')
  })

  ngOnChanges(changes: SimpleChanges) {
    if(changes['titleCar'] && !changes['titleCar'].firstChange){
      this.orderForm.patchValue({ car: this.titleCar });
    }
  }

  validationForm(fieldName:string){
    const control = this.orderForm.get(fieldName)

    return !!(control?.invalid && (control?.dirty || control?.touched))
  }

  sendOrder(){

    
    if(this.orderForm.valid){

      this.http.post('https://testologia.ru/cars-order', this.orderForm.value).subscribe({
        next: (res:any)=> {
          alert(res.message)
          this.orderForm.reset();

        },
        error: (err)=> {
          console.log(err.error)
        }
      })

    }
  }

}
