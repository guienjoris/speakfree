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
  image: string = `${this.url}/${this.auth.getUserDetails().avatar}`
  public uploader: FileUploader = new FileUploader({
    url: `${this.url}/uploads/${this.auth.getUserDetails()._id}`,
    itemAlias: 'avatar'
  });
  constructor(private api: ApiService, private auth: AuthenticationService) {}
  ngOnInit() {   
  console.log(this.auth.getUserDetails()._id)
  console.log(this.auth.getUserDetails().avatar)
  this.uploader.onAfterAddingFile = (file) => {
    file.withCredentials = false;
  };
  this.uploader.onCompleteItem = (item: any, status: any) => {
    console.log('Uploaded File Details:', item);
  }
}
}
