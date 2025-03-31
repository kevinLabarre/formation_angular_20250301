import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponentComponent } from "../components/my-first-component/my-first-component.component";


interface Person {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  imports: [MyFirstComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    console.log('AppComponent constructor');
  }

  myNumber: number = 30;
  userName: string = 'Angular';
  myBoolean: boolean = true;

  fruits: string[] = ['apple', 'banana', 'orange', 'strawberry']
  myNumbers: number[] = [1, 2, 3, 5, 4, 8]

  person: { name: string, age: number } = { name: 'John', age: 30 }

  user: Person = {
    name: 'John',
    age: 30
  }

  add(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): void {
    console.log(a - b)
  }

}

// Interface de classe (ajout d'une méthode de classe)
interface IPerson2 {
  name: string,
  age: number,
  greet(): string
}

interface IPerson3 {
  person: Person2,
  greet(): string
}

class Person2 implements IPerson2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name,
      this.age = age
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }

}

class Person3 implements IPerson3 {
  person: Person2;  // type objet -> {name: string, age: number}

  constructor(person: Person2) {
    this.person = person;
  }

  greet(): string {
    throw new Error('Method not implemented.');
  }


}
