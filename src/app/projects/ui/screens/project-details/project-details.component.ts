import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import NavbarComponent from '../../../../core/ui/components/navbar/navbar.component';
import GoUpButtonComponent from '../../../../core/ui/components/go-up-button/go-up-button.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [NavbarComponent, GoUpButtonComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css', 
  standalone: true
})
export default class ProjectDetailsComponent {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  @Output() goToWorks = new EventEmitter<string>();

  constructor(){
    this._route.params.subscribe(params => {
      const projectId = params['id'];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onNavigateTo(item: string){
    switch (item) {
      case 'back':
        this._router.navigate(['..'], { relativeTo: this._route });        
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

  downloadPDF(){}

}
