import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  UserListComponent} from './user-list/user-list.component'
import {  UserDetailsComponent} from './user-details/user-details.component'


const routes: Routes = [
  { path: "", component: UserListComponent},
  { path: "details/:id", component: UserDetailsComponent},

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserListRoutingModule { }
