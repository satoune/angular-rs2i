import { Injectable } from '@angular/core';
import { Login } from '../../shared/interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  private connectedUser: string;

  private tab = [
    {id: 'said.rabie@gmail.com/azertyui', name: 'Saïd RABIE'},
    {id: 'toto@toto.com/azertyui', name: 'Toto Ben Tata'}
  ];

  constructor() {
    this.connectedUser = '';
   }


  public connect(login: Login): string {
    const id = login.login + '/' + login.password;
    for (const d of this.tab) {
      if (id === d.id) {
        this.connectedUser = d.name;
        localStorage.setItem('user', this.connectedUser);
        return 'The Tocken is : sdfkjsdfsdfhdsfjsdfjsdjhdsfhsdfkjsdfkhsdhkldsfhlksdfhsdfhj';
      }
    }
    return '';
  }

  public getConnectedUser(): string {

    // return this.connectedUser ? this.connectedUser : '';
    return localStorage.getItem('user') ? localStorage.getItem('user') : '';
  }

  public logout(): void {
    this.connectedUser = '';
    localStorage.removeItem('user');
  }
}
