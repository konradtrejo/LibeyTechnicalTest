import { Component, OnInit } from '@angular/core';
import { LibeyUser } from 'src/app/entities/libeyuser';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteUserlibeyComponent } from '../delete-userlibey/delete-userlibey.component';
import { EditUserlibeyComponent } from '../edit-userlibey/edit-userlibey.component'; 
@Component({
  selector: 'app-users-libey',
  templateUrl: './users-libey.component.html',
  styleUrls: ['./users-libey.component.css']
})
export class UsersLibeyComponent implements OnInit {

  users: LibeyUser[] =[];
  user :LibeyUser ={
    documentNumber:'',
    documentTypeId: 0,
    name:'',
    fathersLastName :'',
    mothersLastName :'',
    address :'',
    regionCode :'',
    provinceCode :'',       
    ubigeoCode :'', 
    phone :'', 
    email :'', 
    password :'', 
    active :false, 
  };
  constructor(private libeyUserServices: LibeyUserService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
   this.loadUsers(); 
  }

async loadUsers(){
  this.libeyUserServices.getUsers().subscribe((data:LibeyUser [])=>{
    this.users = data;
  })
 }
 clearForm() {
  this.user = {
    documentNumber: '',
    documentTypeId: 0,
    name: '',
    fathersLastName: '',
    mothersLastName: '',
    address: '',
    regionCode: '',
    provinceCode: '',
    ubigeoCode: '',
    phone: '',
    email: '',
    password: '',
    active: false,
  };
}

goBack() {
  this.router.navigate(['/user/card']); 
}
openEditModal(user: LibeyUser) {
  const modalRef = this.modalService.open(EditUserlibeyComponent);
  modalRef.componentInstance.user = user;

  modalRef.componentInstance.update.subscribe(() => {
    this.loadUsers(); 
  });
}
openDeleteModal(documentNumber: string) {
  const modalRef = this.modalService.open(DeleteUserlibeyComponent);
  modalRef.componentInstance.userId = documentNumber;

  modalRef.componentInstance.userDeleted.subscribe(() => {
    this.deleteUser(documentNumber);

  });
}

deleteUser(documentNumber: string) {
  this.libeyUserServices.deleteUser(documentNumber).subscribe(() => {
    this.loadUsers(); // Recarga la lista de usuarios después de eliminar
  });
}
}

