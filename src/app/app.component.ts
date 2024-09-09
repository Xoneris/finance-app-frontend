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
      <main class="grow my-6 mx-4 sm:my-8 sm:mx-10">
        <router-outlet></router-outlet>
      </main>
    </div>`
    
})
export class AppComponent {
  title = 'finance-app-frontend';
}