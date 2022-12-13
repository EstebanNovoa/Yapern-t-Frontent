import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { RegiterComponent } from './pages/user/regiter/regiter.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { CreatePostComponent } from './pages/user/create-post/create-post.component';
import { MisPostsComponent } from './pages/user/mis-posts/mis-posts.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registro",component:RegiterComponent},
  {path:"Home",component:UserHomeComponent},
  {path:"perfil",component: UserProfileComponent},
  {path:"create-post",component: CreatePostComponent},
  {path:"mis-posts",component: MisPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
