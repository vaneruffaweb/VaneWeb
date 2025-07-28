import { Component } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';

@Component({
  selector: 'app-bio',
  imports: [NavbarComponent],
  templateUrl: './bio.page.html',
  styleUrl: './bio.page.css', 
  standalone: true,
})
export default class BioPage {

}
