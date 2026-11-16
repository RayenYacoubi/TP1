import { Component } from '@angular/core';
import { Contact } from '../contact/contact';

@Component({
  imports: [Contact],
  selector: 'app-infos',
  styleUrl: './infos.css',
  template: `
  <div>
    Informations sur notre site 
    <app-contact></app-contact>
  </div>`,
})
export class Infos {}
