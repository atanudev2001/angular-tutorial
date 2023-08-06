import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { datas } from '../data-dt';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit{
  title = 'Data from array';

  coursedata = datas;


  constructor(){

  }

  ngOnInit(): void {

  }
  viewcourse(){}

  // firstcourse = datas[0];
  // secondcourse =datas[1];



}
