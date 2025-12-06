import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OfferAllocationComponent } from './pages/offer-allocation/offer-allocation.component';
import { EditAllocationComponent } from './pages/edit-allocation/edit-allocation.component';
import { BayToUserComponent } from './pages/bay-to-user/bay-to-user.component';


export const routes: Routes = [
    // this is for main layout (with sidebar and header)
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'viewAllocation/offerAllocation', component: OfferAllocationComponent },
            { path: 'viewAllocation/editAllocation', component: EditAllocationComponent },
            { path: 'allocation/bayToUser', component: BayToUserComponent },

        ],
    },

    // this is for auth layout (without sidebar and header)
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
        ],
    }
];