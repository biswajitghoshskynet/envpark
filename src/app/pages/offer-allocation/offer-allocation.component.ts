import { Component } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-offer-allocation',
  standalone: true,
  imports: [],
  templateUrl: './offer-allocation.component.html',
  styleUrl: './offer-allocation.component.css'
})
export class OfferAllocationComponent {
   constructor(private pageTitle: PageTitleService) { }
  
    ngOnInit(): void {
      this.pageTitle.setTitle('Allocation offer');
    }

}
