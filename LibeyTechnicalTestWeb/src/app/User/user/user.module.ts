import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardsComponent } from './usercards/usercards.component';
import { UsermaintenanceComponent } from './usermaintenance/usermaintenance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { UsersLibeyComponent } from './users-libey/users-libey.component';
import { EditUserlibeyComponent } from './edit-userlibey/edit-userlibey.component';
import { DeleteUserlibeyComponent } from './delete-userlibey/delete-userlibey.component';
@NgModule({
  declarations: [   
    UsercardsComponent,
    UsermaintenanceComponent,
    UsersLibeyComponent,
    EditUserlibeyComponent,
    DeleteUserlibeyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule    
  ]
})
export class UserModule { }