import { Component } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-bay-to-user',
  standalone: true,
  imports: [],
  templateUrl: './bay-to-user.component.html',
  styleUrl: './bay-to-user.component.css'
})
export class BayToUserComponent {
 constructor(private pageTitle: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitle.setTitle('Select Parking Bay');
  }
}
