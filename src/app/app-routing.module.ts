import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'profile', component: UserProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
