import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
searchUser:any=[]
constructor(private api:ApiService,private router:Router){}
  readValue=()=>
  {
    let data:any= {
      "email":this.email,"password":this.password
    }
    console.log(data)
    this.api.addLogin(data).subscribe(
      (response:any)=>
      {
        this.email=""
        this.password=""
        console.log(response)
        if (response.status=="success") {
          this.searchUser=response; 
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.router.navigate(['/view'])
          
        } 
        else {
          alert("invalid email or password")
        }
       
       
      }
    )
  }
}
