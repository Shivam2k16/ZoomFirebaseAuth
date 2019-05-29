import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
	{ path: 'p', component: ProfileComponent },
	{ path: 'a', component: AddressComponent },
	{ path: 's', component: SuggestionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
