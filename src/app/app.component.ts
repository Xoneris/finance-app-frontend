import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <div class="flex min-h-screen min-w-screen bg-[#F2F3F7]">
      <app-navigation></app-navigation>
      <main class="grow mt-6 mb-[98px] mx-4 sm:mt-8 sm:mb-[106px] sm:mx-10 lg:mb-8 ">
        <router-outlet></router-outlet>
      </main>
    </div>`
    
})
export class AppComponent {
  title = 'finance-app-frontend';
}