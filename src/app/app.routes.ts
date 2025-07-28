import { Routes } from '@angular/router';
import HomePage from './home/ui/screens/home/home.page';
import ProjectsPage from './projects/ui/screens/projects/projects.page';
import LecturesPage from './lectures/ui/screens/lectures/lectures.page';
import BioPage from './bio/ui/components/bio/bio.page';
import ContactPage from './contact/ui/components/contact/contact.page';

export const routes: Routes = [
    { 
        path: '', 
        component: HomePage 
    },
    {
      path: 'projects',
      component: ProjectsPage,
    },
    {
      path: 'projects/:id',
      loadComponent: () => import('./projects/ui/screens/project-details/project-details.component').then(m => m.default),
    },
    {
      path: 'works/:id',
      loadComponent: () => import('./projects/ui/screens/work-details/work-details.component').then(m => m.default),  
    },
    { 
      path: 'lecturas', 
      component: LecturesPage 
    },
    { 
      path: 'bio', 
      component: BioPage 
    },
    { 
      path: 'contacto', 
      component: ContactPage 
    },
];