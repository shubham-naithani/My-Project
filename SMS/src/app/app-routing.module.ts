import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [

  {path:'',loadChildren:()=>import("./auth/auth.module").then(c=>c.AuthModule)},
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(c=>c.AdminModule)},  
  {path:'student',loadChildren:()=>import("./student/student.module").then(c=>c.StudentModule)},  
  {path:'teacher',loadChildren:()=>import("./teacher/teacher.module").then(c=>c.TeacherModule)},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
