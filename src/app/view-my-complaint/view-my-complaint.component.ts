import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-my-complaint',
  templateUrl: './view-my-complaint.component.html',
  styleUrls: ['./view-my-complaint.component.css']
})
export class ViewMyComplaintComponent {
  userId:any=""
  constructor(private api:ApiService){

    this.userId=localStorage.getItem("userInfo")
    let data:any={
      "id":this.userId
    }
    this.api.viewMyComplaints(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  data:any=[]
  
 
}
