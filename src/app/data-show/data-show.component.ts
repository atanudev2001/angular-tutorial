import { datas } from './../data-dt';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit{
  title = 'Data from array';


  coursedata=datas;



  constructor(){ }

  ngOnInit(): void { }

  viewcourse(){}


  classstyle(){
    return{
      'text-decoration':'underline'
    };
  }

  startdate = new Date(2023,7,3 )
  price = 9.99;
  rate = 0.454;



  firstcourse = datas[0];
  // secondcourse =datas[1];



}
