import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logopage=true;
profile=false;
  constructor(public service:AuthService ) { }

  ngOnInit() {
  	setTimeout(()=>{this.logopage=false;},1500);
  }


signInWithGoogle(){
	this.service.getGoogleLogin().then((res)=>{this.profile=true;});
}
signInWithGithub(){
	this.service.getGithubLogin().then((res)=>{this.profile=true;});
}

}
