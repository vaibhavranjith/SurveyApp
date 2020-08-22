import { Component, OnInit } from '@angular/core';
import {QdbService} from '../services/qdb.service'
import {Question} from '../shared/question.model'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-qcrud',
  templateUrl: './qcrud.component.html',
  styleUrls: ['./qcrud.component.css']
})
export class QcrudComponent implements OnInit {

  constructor(private qdb:QdbService) { }
  operation;
  ngOnInit(): void {
    this.operation=1;
  }
  check(){
  
    this.qdb.check().subscribe(resp=>console.log(resp))
    // this.qdb.adddata(mes).subscribe(resp=>console.log(resp))
  }
  wtfh(){
    console.log(this.operation)
  }

}
