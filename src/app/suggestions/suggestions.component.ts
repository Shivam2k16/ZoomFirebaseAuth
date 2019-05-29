import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
@Input() addressObj:any;
  constructor() { }

  ngOnInit() {
  }
  suggest=[
  {name:'Prashant', friend:false,src:'assets/icons/man.svg'},
  {name:'Deepak', friend:false,src:'assets/icons/man-4.svg'},
  {name:'Shrida', friend:true,src:'assets/icons/boy.svg'},
  {name:'Arun', friend:false,src:'assets/icons/boy-1.svg'},
  {name:'Kamlesh', friend:false,src:'assets/icons/man-1.svg'},
  {name:'Nirtish', friend:true,src:'assets/icons/man-2.svg'},
  {name:'Maithili', friend:true,src:'assets/icons/girl-1.svg'},
  {name:'Harshita', friend:false,src:'assets/icons/girl.svg'},
  {name:'Darshan', friend:true,src:'assets/icons/man-3.svg'}];

  popup(){
  	console.log(this.addressObj);
  	console.log(this.suggest);
  }

  friendInfo(name){
  	for (var i = 0; i < this.suggest.length; i++) {
  		if(name==this.suggest[i]){
  			if(name.friend){
  				this.suggest[i].friend=false;
  			}
  			else{
  				this.suggest[i].friend=true;
  			}
  		}
  	}


  }
}
