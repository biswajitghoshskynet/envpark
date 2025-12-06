import { Component } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-edit-allocation',
  standalone: true,
  imports: [],
  templateUrl: './edit-allocation.component.html',
  styleUrl: './edit-allocation.component.css'
})
export class EditAllocationComponent {
  constructor(private pageTitle: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitle.setTitle('View Bookings');
  }

}
