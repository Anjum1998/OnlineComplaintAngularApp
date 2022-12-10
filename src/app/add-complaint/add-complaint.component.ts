import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent {
  complaints=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"userId":localStorage.getItem("userInfo"),
    "complaints":this.complaints}
    console.log(data)
    this.api.addComplaint(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert(" complaint successful")
        } else {
          alert("not added")
        }
      }
    )
  }
}
