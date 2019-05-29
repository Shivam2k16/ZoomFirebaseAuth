import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

@Input() profileObj:any;

  suggestions=false;
AddressObj=[];
   angForm: FormGroup;
  constructor(private fb: FormBuilder,private is:AuthService,private router: Router) { }


  ngOnInit() {
  	this.createForm();
  }

 
  createForm() {
    this.angForm = this.fb.group({
      country: ['', Validators.required ],
     state: ['', Validators.required ],
      city: ['', Validators.required ],
      zipcode: ['', Validators.required ],
      geocode: ['', Validators.required ]
    });
  }

  addressInfo(country,state,city,zipcode,geocode){
  	var obj={
  		country:country,
  		state:state,
  		city:city,
  		zipcode:zipcode,
  		geocode:geocode

  	};
 	
  	this.AddressObj.push(obj);
  	this.AddressObj.push(this.profileObj);
  	this.suggestions=true;
  }

}
