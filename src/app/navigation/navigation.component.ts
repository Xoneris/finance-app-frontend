import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NavElementComponent } from '../nav-element/nav-element.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavElementComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
