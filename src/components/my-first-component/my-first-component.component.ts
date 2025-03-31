import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-first-component',
  imports: [FormsModule],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  title: string = 'My first component';

  checkBoxValue: boolean = false

  // checkBox_2_Value: boolean | undefined
  //checkBox_2_Value?: boolean

  checkBox_2_Value: boolean = false


  user: any = {
    name: 'John',
    age: 30
  };

  constructor() {
    setTimeout(() => {
      this.user = {
        name: 'JONY',
        age: 50
      }
    }, 3000)
  }

  handleClick() {
    alert("J'ai cliqué !")
  }

  handleSubmit(e: Event): void {
    e.preventDefault();
    console.log(e);
    alert("formulaire envoyé !")

    const target = e.target as HTMLFormElement
    const formData = new FormData(target)

    const name: string = formData.get('name')!.toString();
    const age: number = Number(formData.get('age'));

    alert(`Nom: ${name}, Age: ${age}`)
  }


  handleCheckBoxChange(e: Event): void {
    const target = e.target as HTMLFormElement
    this.checkBoxValue = target['checked']
  }


}
