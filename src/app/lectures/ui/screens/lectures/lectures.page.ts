import { Component } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';

@Component({
  selector: 'app-lectures',
  imports: [NavbarComponent],
  templateUrl: './lectures.page.html',
  styleUrl: './lectures.page.css', 
  standalone: true,
})
export default class LecturesPage {

  showPublicationsPage: boolean = true;
  showPressPage: boolean = false;

  isPublicationsActive: boolean = true;
  isPressActive: boolean = false;

  onSubitemSelected(subitem: string) {
    switch (subitem) {
      case 'publications':
        this.isPublicationsActive = true;
        this.isPressActive = false;
        this.showPublicationsPage = true;
        this.showPressPage = false;
        break;
      case 'press':
        this.isPublicationsActive = false;
        this.isPressActive = true;
        this.showPublicationsPage = false;
        this.showPressPage = true;
        break;
      default:
        this.isPublicationsActive = true;
        this.isPressActive = false;
        this.showPublicationsPage = true;
        this.showPressPage = false;
        break;
    }

  }


}
