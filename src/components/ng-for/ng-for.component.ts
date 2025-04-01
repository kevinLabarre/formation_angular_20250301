import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  imports: [FormsModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  displayForm: boolean = false

  consigne: string =
    "<pre>Le <strong>@for</strong>" +
    " permet de boucler sur un ensemble de données." +

    "<a href=\"https://angular.dev/api/core/@for\" target=\"_blank\">https://https://angular.dev/api/core/@for</a>" +

    " <ul class='text-l pt-2'>" +
    " <li>" +
    " 1. Utiliser le @for pour afficher une liste d'utilisateurs" +
    " </li>" +
    " <li>" +
    " 2. Afficher l'index de chacun des utilisateurs" +
    " </li>" +
    " <li>" +
    " 3. Ajouter un bouton 'supprimer' sur chacune des lignes --> ne rajouter que le bouton, ne pas implémenter de fonction liées au bouton" +
    " </li>" +
    " <li>" +
    " 4. Utiliser le '(click)' pour implémenter la fonction de suppression de l'utilisateur. Celle ci doit supprimer un utilisateur de la liste" +
    " </li>" +
    " <li>" +
    " 5. Rajouter une fonctionnalité qui permet d'ajouter un utilisateur (via un formulaire) dans la liste" +
    " </li>" +
    " <li>" +
    " 6. Faire une barre de recherche sur le nom des utilisateurs" +
    " </li>" +
    " </ul>" +
    "</pre>"
    ;

  users: any = [
    {
      name: 'John Doe',
      age: 30,
      address: '123 Main St, Anytown, USA',
      phone: '123-456-7890',
      email: 'john.doe@example.com'
    },
    {
      name: 'Jane Doe',
      age: 25,
      address: '456 Other St, Othertown, USA',
      phone: '987-654-3210',
      email: 'jane.doe@example.com'
    },
    {
      name: 'Bob Smith',
      age: 35,
      address: '789 Elm St, Smalltown, USA',
      phone: '555-555-5555',
      email: 'bob.smith@example.com'
    }
  ]

  originalUsers: any = [...this.users]

  handleDeleteUser(index: number): void {
    // splice en JS , prend en paramètre:
    // -  l'index du premier élément à supprimer
    // -  le nombre d'élément à supprimer
    this.users.splice(index, 1);
  }

  handleShowForm(): void {
    this.displayForm = !this.displayForm
  }

  handleAddUser(e: Event): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)
    const name: string = formData.get('name')!.toString();
    const age: number = Number(formData.get('age'));
    const address: string = formData.get('address')!.toString();
    const phone: string = formData.get('phone')!.toString();
    const email: string = formData.get('email')!.toString();

    this.users.push({ name, age, address, phone, email })
  }

  handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    const searchValue = target.value.toLowerCase();

    this.users = this.originalUsers.filter((user: any) => user.name.toLowerCase().includes(searchValue))



  }

}
