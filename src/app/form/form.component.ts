import { Component, Input } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() titleCar:string ='' 

  orderForm = new FormGroup({
    car: new FormControl('',[Validators.required]),
    name:new FormControl(''),
    phone: new FormControl('')
  })


  validationForm(fieldName:string){
    const control = this.orderForm.get(fieldName)

    return !!(control?.invalid && (control?.dirty || control?.touched))
  }

  sendOrder(){
    this.orderForm.get('car')?.setValue(this.titleCar)
    
    if(this.orderForm.valid){
      alert('Confirm order')
      this.orderForm.reset();
    }
  }

}
