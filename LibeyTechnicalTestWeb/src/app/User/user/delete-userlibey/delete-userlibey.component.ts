import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-userlibey',
  templateUrl: './delete-userlibey.component.html',
  styleUrls: ['./delete-userlibey.component.css']
})
export class DeleteUserlibeyComponent implements OnInit {
  @Input() userId: string ='';
  @Output() userDeleted = new EventEmitter<void>();
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
  confirmDelete() {
  
    this.userDeleted.emit();
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss(); 
  }
}

