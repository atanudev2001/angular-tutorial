import { datas } from './../data-dt';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css']
})
export class DataShowComponent implements OnInit{
  title = 'Data from array';

  // @Input()
  // courses:datas;

  coursedata = datas;


  constructor(){ }

  ngOnInit(): void { }

  viewcourse(){}

  // classcall(){
  //   if(this.coursedata.category == 'advanced'){
  //     return 'beginner';
  //   }
  //   else{
  //     return'beginner';
  //   }
  // }
  classstyle(){
    return{
      'text-decoration':'underline'
    };
  }


  // firstcourse = datas[0];
  // secondcourse =datas[1];



}
