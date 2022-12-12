import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarUserComponent } from './Components/Common/nav-bar-user/nav-bar-user.component';
import { ButtonNavBarComponent } from './Components/Common/button-nav-bar/button-nav-bar.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { PostContainerComponent } from './Components/Common/post-container/post-container.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegiterComponent } from './pages/user/regiter/regiter.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarUserComponent,
    ButtonNavBarComponent,
    UserHomeComponent,
    PostContainerComponent,
    LoginComponent,
    RegiterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
