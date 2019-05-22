import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studentnotifications',
  templateUrl: './studentnotifications.component.html',
  styleUrls: ['./studentnotifications.component.css']
})
export class StudentnotificationsComponent implements OnInit {

  datafromnotice: any[];


  constructor(private ds: DataService) { }

  ngOnInit() {

    this.ds.getNotice2().subscribe(data => this.datafromnotice = data);


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
}