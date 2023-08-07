import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  Submit(){
    swal.fire("Oops!", "Something went wrong!", "error");
  }
}