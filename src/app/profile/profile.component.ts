import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
address=false;
ProfileObj=[];
path;
   angForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { }


  ngOnInit() {
  	this.createForm();
  }

 
  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      user_name: ['', Validators.required ],
      dob: ['', Validators.required ],
      phone: ['', Validators.required ],
      gender: ['', Validators.required ]
    });
  }


  profileInfo(first_name,last_name,user_name,picker,phone,gender){
  	var obj={
  		first_name:first_name,
  		last_name:last_name,
  		user_name:user_name,
  		date_of_birth:picker,
  		phone_number:phone,
  		gender:gender,
  		your_avatar:this.path
  	};
  	this.ProfileObj.push(obj);
  	this.address=true;
  }

  selectedAvatar(path){
  		this.path=path;
  }


}
