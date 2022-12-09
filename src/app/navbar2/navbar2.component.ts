import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  userid:any=""
  userdata:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userInfo")
  let data:any={
    "id":this.userid
  }
  this.api.getProfileDetails(data).subscribe(
    (response:any)=>
    {
      this.userdata=response;
    }
  )
  }
}
