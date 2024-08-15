
import { Component, OnInit } from '@angular/core';
import { LibeyUserService } from "src/app/core/service/libeyuser/libeyuser.service";
import { LibeyUser } from '../../../entities/libeyuser';
import {ResponseLibeyUser} from '../../../entities/response';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {

  typeMessage: string= 'Desea Agregar al usuario?';
  confirmButtonText: string ='Si';
  cancelButtonText: string ='No';
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
  constructor(private LibeyUserService: LibeyUserService, private router :Router) { }
  ngOnInit(): void {}
 async Submit(userForm :any){
   // swal.fire("Oops!", "Something went wrong!", "error");
  if(userForm.valid){
    
  
   swal.fire({
    title: 'Información',
    text:this.typeMessage,
    icon:'question',
    showCancelButton:true,
    confirmButtonText: this.confirmButtonText,
    allowOutsideClick:false,
    cancelButtonText:this.cancelButtonText
  }).then((result) =>{
      if(result.value){
        console.log(this.user);
        this.LibeyUserService.addUser(this.user).subscribe( response =>{
          if(response.code===0){
            swal.fire(
              'information',
              'Creado correctamente',
              'success'
            )
            this.clearForm();
            this.router.navigate(['/user/maintenance']); 
            
          } 
          else{
           swal.fire(
             'information',
             'Creado correctamente',
             'error'
           )
           this.clearForm();
           this.router.navigate(['/user/maintenance']); 
          }
        })

        
      }
  })
  
} else {
  swal.fire(
    'Formulario inválido',
    'Por favor, complete todos los campos requeridos para la creación del usuario',
    'warning'
  );
}
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
}


