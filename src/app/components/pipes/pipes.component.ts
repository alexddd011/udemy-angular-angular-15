import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <table>
      <thead>
        <tr>
          <td>nome</td>
          <td>sexo</td>
          <td>idade</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cliente of clientes">
          <td>{{cliente.nome | uppercase}}</td>
          <td>{{cliente.sexo}}</td>
          <td>{{cliente.idade}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class PipesComponent {

  

  clientes:any[] = [
    {
      'nome':'Alex',
      'sexo':'masculino',
      'idade':40
    },
    {
      'nome':'Gabi',
      'sexo':'feminino',
      'idade':10
    },
    {
      'nome':'Jorge',
      'sexo':'masculino',
      'idade':14
    }
  ]
}
