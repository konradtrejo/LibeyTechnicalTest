import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LibeyUser } from '../../../entities/libeyuser';
import { LibeyUserService } from "src/app/core/service/libeyuser/libeyuser.service";

@Component({
  selector: 'app-edit-userlibey',
  templateUrl: './edit-userlibey.component.html',
  styleUrls: ['./edit-userlibey.component.css']
})
export class EditUserlibeyComponent implements OnInit {

  @Input() user: LibeyUser= {
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
    active: false
  };
  @Output() update = new EventEmitter<void>();


  ngOnInit(): void {

  }
  constructor(public activeModal: NgbActiveModal, private userService: LibeyUserService) {}

  close() {
    this.activeModal.close();
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      this.update.emit();
      this.activeModal.close();
    });
  }
}
