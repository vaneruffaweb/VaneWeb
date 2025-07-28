import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';
import GoUpButtonComponent from '../../../../core/ui/components/go-up-button/go-up-button.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../core/ui/interfaces/Project';
import { SafeResourceUrlPipe } from '../../../../core/utils/pipes/safe-resource-url.pipe';
import { SafeHtmlPipe } from '../../../../core/utils/pipes/safe-html.pipe';

@Component({
  selector: 'app-work-details',
  imports: [NavbarComponent, GoUpButtonComponent, SafeResourceUrlPipe, SafeHtmlPipe],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.css', 
  standalone: true
})
export default class WorkDetailsComponent {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _projectService = inject(ProjectService);

  @Output() goToWorks = new EventEmitter<string>();

  workId: string = '';
  selectedWork: Project | undefined;

  constructor() {
    this._route.params.subscribe(params => {
      this.workId = params['id'];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._projectService.getProjectById(this.workId).subscribe(work => {
      this.selectedWork = work;
    });
  }

  onNavigateTo(item: string){
    switch (item) {
      case 'back':
        this._router.navigate(['/projects'], { relativeTo: this._route });        
        break;
      case 'works':
        const navigationExtras: NavigationExtras = {
          state: {
            goToWorks: true
          }
        };
        this._router.navigate(['/projects'], navigationExtras);
        break;
    }      
  }

  downloadPDF(){
    const link = document.createElement('a');
    link.href = 'assets/pdf/AJAYU-LLUMPPA-SCORE.pdf';
    link.download = 'AJAYU-LLUMPPA-SCORE.pdf';
    link.target = '_blank';
    link.click();
  }

}
