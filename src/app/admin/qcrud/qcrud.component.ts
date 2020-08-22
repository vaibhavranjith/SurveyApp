import { Component, OnInit } from '@angular/core';
import {QdbService} from '../services/qdb.service'
import {Question} from '../shared/question.model'
import { FormControl } from '@angular/forms'
import {Query} from '../shared/query.model'
import {QData} from '../shared/qdata.model'

@Component({
  selector: 'app-qcrud',
  templateUrl: './qcrud.component.html',
  styleUrls: ['./qcrud.component.css']
})
export class QcrudComponent implements OnInit {

  constructor(private qdb:QdbService) { }
  operation;
  topicId:string;
  nref:string;
  ndesc:string;
  numberofq:number;
  newQ:QData;

  ngOnInit(): void {
    this.operation=1;
    this.newQ={
      ref:"",
      desc:"",
      questions:[]
    }
    console.log(this.newQ);
  }
  check(){
  
    // this.qdb.check().subscribe(resp=>console.log(resp))
    // this.qdb.adddata(mes).subscribe(resp=>console.log(resp))
  }
  wtfh(){
    console.log(this.operation)
    console.log(this.topicId)
    console.log(this.numberofq)
    this.newQ.ref=this.nref;
    this.newQ.desc=this.ndesc;
    console.log(this.newQ);
  }
  addQ(){
    console.log("HI");
    let nQ:Query={
      question:"",
      options:[],
      allowTextAnswer:false
    }
    this.newQ.questions.push(nQ)
  }
  remQ(){
    this.newQ.questions.pop();
  }
  addopt(i){
    console.log(i)
    this.newQ.questions[i].options.push(null);
    console.log(this.newQ.questions[i].options.length)
  }
  remopt(i){
    console.log(i)
    this.newQ.questions[i].options.pop();
    console.log(this.newQ.questions[i].options.length)
  }
  submit(){
    this.newQ.ref=this.nref;
    this.newQ.desc=this.ndesc;
    console.log(this.newQ)
    this.qdb.adddata(this.newQ,this.topicId).subscribe(resp=>console.log(resp));
  }
  customTrackBy(index: number, obj: any): any {
    return index;
}
}
