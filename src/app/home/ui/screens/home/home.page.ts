import { Component } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css', 
  standalone: true,
})
export default class HomePage {

}
