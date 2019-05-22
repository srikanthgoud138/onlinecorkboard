import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {

  constructor(private router:Router,private ds:DataService) { }



  ngOnInit() {

    // this.ds.getUpdate().subscribe(data=>this.data1=data);



  }

  onUpdate(v)
  {
    // if(this.data1.uname=v.uname)
    // {

    console.log(v);
     this.ds.onUpdate(v).subscribe(msg=>{


      alert(msg);


        this.router.navigate(['/students']);

   



     });

    // }
    


  }

}
