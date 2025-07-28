import { Component } from '@angular/core';

@Component({
  selector: 'app-go-up-button',
  imports: [],
  templateUrl: './go-up-button.component.html',
  styleUrl: './go-up-button.component.css', 
  standalone: true
})
export default class GoUpButtonComponent {
  goUp(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
