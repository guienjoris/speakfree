import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService} from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component'
import { AdminGuardService} from './admin-guard.service'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {path: 'admin', component: AdminComponent, canActivate:[AdminGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
