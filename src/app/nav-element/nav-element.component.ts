import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-element',
  standalone: true,
  imports: [RouterLinkActive],
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.css'
})
export class NavElementComponent {

}