import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {UserListRoutingModule} from "./user-list-routing.module";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

@
NgModule({
  imports: [CommonModule, UserListRoutingModule],
  declarations: [UserListComponent, UserDetailsComponent]
})
export class UserListModule {
}
