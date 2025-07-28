import { Component, inject } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NavbarComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css', 
  standalone: true,
})
export default class ProjectsPage {

  private _router = inject(Router);

  constructor() {
    const navigation = this._router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
        const goToWorks = navigation.extras.state['goToWorks'];
        if (goToWorks) {
          this.isWorkshopsActive = false;
          this.isWorksActive = true;
          this.showWorkshopsPage = false;
          this.showWorksPage = true;
        }
    }
  }

  showWorkshopsPage: boolean = true;
  showWorksPage: boolean = false;

  isWorkshopsActive: boolean = true;
  isWorksActive: boolean = false;

  onSubitemSelected(subitem: string) {
    switch (subitem) {
      case 'workshops':
        this.isWorkshopsActive = true;
        this.isWorksActive = false;
        this.showWorkshopsPage = true;
        this.showWorksPage = false;
        break;
      case 'works':
        this.isWorkshopsActive = false;
        this.isWorksActive = true;
        this.showWorkshopsPage = false;
        this.showWorksPage = true;
        break;
      default:
        this.isWorkshopsActive = true;
        this.isWorksActive = false;
        this.showWorkshopsPage = true;
        this.showWorksPage = false;
        break;
    }
  }

  navigateToProjectDetails(projectId: string) {
    this._router.navigate(['/projects/', projectId]);
  }

  navigateToWorkDetails(workId: string) {
    this._router.navigate(['/works/', workId]);
  }

}
