import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService} from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardService} from './admin-guard.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component'
import { ContactComponent } from './contact/contact.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminPostValideComponent } from './admin-post-valide/admin-post-valide.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {path: 'admin', component: AdminComponent, canActivate:[AdminGuardService]},
  {path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuardService] },
  {path: 'admin/admin-users', component: AdminUsersComponent, canActivate:[AdminGuardService]},
  {path: 'admin/admin-posts',component: AdminPostsComponent, canActivate:[AdminGuardService]},
  {path: 'admin/admin-post-valide', component: AdminPostValideComponent, canActivate:[AdminGuardService]},
  {path: 'contact', component: ContactComponent},
  {path: 'admin/admin-contact',component: AdminContactComponent, canActivate:[AdminGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
