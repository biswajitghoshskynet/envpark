import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private sidebarService: SidebarService) {
    this.isOpen$ = this.sidebarService.isOpen$;
  }

  toggleContainerClass(event?: MouseEvent) {
    // prevent click from bubbling to parent elements
    if (event) {
      event.stopPropagation();
    }
    this.isContainerActive = !this.isContainerActive;
  }

}
