import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardService } from './admin-guard.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { ContactComponent } from './contact/contact.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { AdminPostValideComponent } from './admin-post-valide/admin-post-valide.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';







@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    CreatePostComponent,
    AdminUsersComponent,
    AdminPostsComponent,
    ContactComponent,
    AdminContactComponent,
    AdminPostValideComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule
  ],
  providers: [AuthGuardService,AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
