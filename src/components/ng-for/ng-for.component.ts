import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
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

}
