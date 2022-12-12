import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { RegiterComponent } from './pages/user/regiter/regiter.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registro",component:RegiterComponent},
  {path:"Home",component:UserHomeComponent},
  {path:"perfil",component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
