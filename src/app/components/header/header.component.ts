import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly title$;
  readonly isOpen$;

  constructor(private sidebarService: SidebarService, private pageTitleService: PageTitleService) {
    this.title$ = this.pageTitleService.title$;
    this.isOpen$ = this.sidebarService.isOpen$;
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
