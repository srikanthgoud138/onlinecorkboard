import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoutingModule } from './/routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { FacultyupdateComponent } from './facultyupdate/facultyupdate.component';
import { StudentnotificationsComponent } from './studentnotifications/studentnotifications.component';
import { FacultynotificationsComponent } from './facultynotifications/facultynotifications.component';
import { DataService } from 'src/app/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    FacultyComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CarouselComponent,
    NoticeboardComponent,
    StudentupdateComponent,
    FacultyupdateComponent,
    StudentnotificationsComponent,
    FacultynotificationsComponent,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,FormsModule,HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
