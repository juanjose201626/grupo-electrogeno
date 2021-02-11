import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})

export class UbicacionComponent{
  model: NgbDateStruct;
  closeResult = '';

  constructor(private modalService: NgbModal, private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}