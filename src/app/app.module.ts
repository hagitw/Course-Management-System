import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { RegisterCourseComponent } from './components/register-course/register-course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  { path: 'add-course', component: AddCourseComponent },
  { path: 'view-courses', component: ViewCoursesComponent },
  { path: 'register-course', component: RegisterCourseComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'nav-bar', component: NavbarComponent },
  { path: 'edit-course', component: EditCourseComponent }]

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    EditCourseComponent,
    ViewCoursesComponent,
    RegisterCourseComponent,
    CourseDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
