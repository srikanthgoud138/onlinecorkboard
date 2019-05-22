import { Component, OnInit, } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-facultynotifications',
  templateUrl: './facultynotifications.component.html',
  styleUrls: ['./facultynotifications.component.css']
})export class FacultynotificationsComponent implements OnInit {

  datafromnotice: any[];
  ba:any;
  sno1:number;
  batch1:number;
  name1:string;
  date1:Date;
  _id:string;
  tempobj:any={};
  
 


  constructor(private ds: DataService) { }

  ngOnInit() {

    this.ds.getNotice1().subscribe(data => this.datafromnotice = data);


  }
  isDesc: boolean;
  column: string;
  direction: number;

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
    //this.sort(this.column);
  };

  onDelete(d)
  {

    console.log(d._id);
    this.ds.onDelete(d._id).subscribe(data=>this.datafromnotice=data);


  }
  onCreate(v)
  {

    console.log(v);
    this.ds.onCreate(v).subscribe(data=>this.datafromnotice=data);

  }
  onSave(v)
  {
    console.log(v);
    this.tempobj._id=this._id;
    this.tempobj.sno=this.sno1;
    this.tempobj.batch=this.batch1;
    this.tempobj.name=this.name1;
    this.tempobj.date=this.date1;
    this.ds.onSave(this.tempobj).subscribe(data=>this.datafromnotice=data);
    
        
  }
  onEdit(v)
  {

    console.log(v);
    this._id=v._id;
    this.sno1=v.sno;
    this.batch1=v.batch;
    this.name1=v.name;
    this.date1=v.date;
  }

}