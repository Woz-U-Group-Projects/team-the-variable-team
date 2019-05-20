import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-emp-post-job',
  templateUrl: './emp-post-job.component.html',
  styleUrls: ['./emp-post-job.component.css']
})
export class EmpPostJobComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
  }

}
