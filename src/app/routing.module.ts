import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { StudentsComponent } from 'src/app/students/students.component';
import { FacultyComponent } from 'src/app/faculty/faculty.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { StudentupdateComponent } from 'src/app/studentupdate/studentupdate.component';
import { StudentnotificationsComponent } from 'src/app/studentnotifications/studentnotifications.component';
import { FacultyupdateComponent } from 'src/app/facultyupdate/facultyupdate.component';
import { FacultynotificationsComponent } from 'src/app/facultynotifications/facultynotifications.component';

@NgModule({
  imports: [
    RouterModule.forRoot([

      {
        path: "home", component: HomeComponent,

        children: [{ path: "aboutus", component: AboutusComponent },
        { path: "login", component: LoginComponent },
        { path: "register", component: RegisterComponent },


        ]

      },

      {
        path: "", redirectTo: "home", pathMatch: "full",


      },




      {
        path: "students", component: StudentsComponent,
        children: [{ path: "updateprofilestudents", component: StudentupdateComponent },
        { path: "notificationsstudents", component: StudentnotificationsComponent }



        ]
      },









      {
        path: "faculty", component: FacultyComponent,
        children: [{ path: "updateprofilefaculty", component: FacultyupdateComponent },
        { path: "notificationsfaculty", component: FacultynotificationsComponent }


        ]
      }


    ], { useHash: true })
  ],
  exports: [RouterModule, FormsModule]
})
export class RoutingModule { }
