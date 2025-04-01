import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  displayForm: boolean = true;
  inputValue: string = '';
  inputValue2: string = '';

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

  handleClick(): void {
    this.displayForm = !this.displayForm
  }

  handleInputChange(e: Event): void {
    const target = e.target as HTMLInputElement
    this.inputValue2 = target.value
  }

}
