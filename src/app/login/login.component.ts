import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ds: DataService) { }

  msg: string = "user exists"

  ngOnInit() {

    

  }

  onRegister() {


    this.router.navigate(['/home/register']);



  }

  onLogin(ref) {

    if (ref.uname == "goud" && ref.password == "srikanth") {

      this.router.navigate(['/faculty']);

    }
    else {

      console.log(ref);

      this.ds.getLogin(ref).subscribe(msg => {

        alert(msg);
        if (this.msg == msg) {

          this.router.navigate(['/students']);
        }
      })
    }


// onLogin(ref)
// {
//   console.log(ref);
//   if (ref.username = "goud" && ref.password == "srikanth") {
    
//            this.router.navigate(['/faculty']);
    
//         }
//   else{

      
//            this.ds.getLogin(ref).subscribe(msg => {
            
//                alert(msg);
                
            
//               this.router.navigate(['/students']);
              
              
//         });
// }


}
}

