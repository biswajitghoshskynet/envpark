import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  readonly isOpen$;
  isContainerActive = false;
  // map of submenu open states, keyed by menu id
  openMenus: Record<string, boolean> = {
    view: false,
  };

  constructor(private sidebarService: SidebarService, private router: Router) {
    this.isOpen$ = this.sidebarService.isOpen$;
  }

  toggleContainerClass(event?: MouseEvent) {
    // prevent click from bubbling to parent elements
    if (event) {
      event.stopPropagation();
    }
    this.isContainerActive = !this.isContainerActive;
  }

  toggleMenu(key: string, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    const currentlyOpen = !!this.openMenus[key];
    // close all menus first (accordion behavior)
    Object.keys(this.openMenus).forEach(k => this.openMenus[k] = false);
    // toggle the requested menu: open if it was closed, close if it was open
    this.openMenus[key] = !currentlyOpen;
  }

  isMenuOpen(key: string) {
    return !!this.openMenus[key];
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  isParentActive(urls: string[]): boolean {
    return urls.some(url => this.router.url === url);
  }

}
