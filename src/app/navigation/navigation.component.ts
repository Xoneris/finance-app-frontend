import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NavElementComponent } from './nav-element/nav-element.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavElementComponent, NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  isMinimised:boolean = true

  toggleMinimised() {
    this.isMinimised = !this.isMinimised
  }
}