import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {


  datafromnotice: any[];

 
  constructor(private ds: DataService) { }

  ngOnInit() {
    
        this.ds.getNotice().subscribe(data => this.datafromnotice = data);
    
      }
    
}
