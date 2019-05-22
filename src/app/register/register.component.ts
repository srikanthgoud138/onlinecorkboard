import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:DataService) { }
  
  ngOnInit() {
  }
  msg:string;
  onLogin(ref)
  {

  
      console.log(ref);

    
      this.ds.getRegister(ref).subscribe(msg=>{

        alert(msg);

       
   
        this.router.navigate(['/home/login']);
        
      })
    //  

      


  }


}
