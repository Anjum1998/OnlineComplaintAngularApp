import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  address=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confirm=""
  readValue=()=>
  {
    let data:any={
  
      "name":this.name,"address":this.address,"dob":this.dob,"email":this.email,
      "phone":this.phone,"username":this.username,"password":this.password,"confirm":this.confirm
  
    }
    console.log(data)
  }

}
