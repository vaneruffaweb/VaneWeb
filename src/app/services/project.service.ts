import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../core/ui/interfaces/Project';
import { PROJECTS_DATA } from '../core/data/projects-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = PROJECTS_DATA.find(p => p.id === id);
    return of(project);
  }

  getAllProjects(): Observable<Project[]> {
    return of(PROJECTS_DATA);
  }

}
