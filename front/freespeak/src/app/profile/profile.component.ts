import { Component , OnInit} from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { ApiService } from '../service/api.service';
import { FileUploader } from 'ng2-file-upload';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  url: string = "http://localhost:3000"
  image: string ;
  public uploader: FileUploader = new FileUploader({
    url: `${this.url}/uploads/${this.auth.getUserDetails()._id}`,
    itemAlias: 'avatar'
  });
  constructor(private api: ApiService, private auth: AuthenticationService) {}
  ngOnInit() {   
  this.uploader.onAfterAddingFile = (file) => {
    file.withCredentials = false;
  };
  this.uploader.onCompleteItem = (item: any, status: any) => {
    console.log('Uploaded File Details:', item);
    this.ngOnInit();
  }
  return this.api.getAvatar(this.auth.getUserDetails()._id).subscribe((data)=>{
    this.image= `${this.url}/${data[0].avatar}`
  });
}
}
