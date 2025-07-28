import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export default class NavbarComponent implements OnInit {

  private _router = inject(Router);
  private subscription!: Subscription;

  isHomeActive = true;
  isProjectsActive = false;
  isLecturasActive = false;
  isBioActive = false;
  isContactoActive = false;

  isMobileMenuExpanded = false;

  isMobileView: boolean = false;

  ngOnInit(): void {

    this.checkIfMobile();

    this.subscription = this._router.events.pipe(
          filter(event => event instanceof NavigationEnd) // Filtra solo los eventos NavigationEnd
        ).subscribe((event: NavigationEnd) => {
          this.setActiveFromUrl(event.urlAfterRedirects);

          // Al navegar, si estamos en vista móvil y no es la home, minimiza el menú
          // (Es decir, si se hizo clic en una sección que no es la home)
          if (this.isMobileView && !this.isHomeActive) { 
            this.isMobileMenuExpanded = false; // El menú se minimiza mostrando solo home y la sección activa
          }
        });

    this.setActiveFromUrl(this._router.url);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Escucha cambios en el tamaño de la ventana para actualizar isMobileView
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  // Verifica si el ancho de la ventana es menor que el breakpoint 'lg' de Tailwind (1024px por defecto)
  private checkIfMobile(): void {
    this.isMobileView = window.innerWidth < 1024;
  }

  onNavigateTo(path: string) {
    this._router.navigate([path]);
      if (this.isMobileView && path !== '/' && path !== '/home') {
      this.isMobileMenuExpanded = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuExpanded = !this.isMobileMenuExpanded;
  }

  private setActiveFromUrl(url: string): void {
    this.clearActive();

    if (url === '/' || url.startsWith('/home')) {
      this.isHomeActive = true;
    } else if (url.startsWith('/projects') || url.startsWith('/works')) {
      this.isProjectsActive = true;
    } else if (url.startsWith('/lecturas')) {
      this.isLecturasActive = true;
    } else if (url.startsWith('/bio')) {
      this.isBioActive = true;
    } else if (url.startsWith('/contacto')) {
      this.isContactoActive = true;
    }
  }

  private clearActive() {
    this.isHomeActive = false;
    this.isProjectsActive = false;
    this.isLecturasActive = false;
    this.isBioActive = false;
    this.isContactoActive = false;
  }
}
