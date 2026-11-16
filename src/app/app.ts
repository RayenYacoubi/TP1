import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Products } from './products/products';
import { Infos } from './footer/infos/infos';

@Component({
  imports: [RouterOutlet, Menu, Products, Infos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TP1');
}


