import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UsercardsComponent } from "./User/user/usercards/usercards.component";
import { UsermaintenanceComponent } from "./User/user/usermaintenance/usermaintenance.component";
import { UsersLibeyComponent } from './User/user/users-libey/users-libey.component';
import { EditUserlibeyComponent } from './User/user/edit-userlibey/edit-userlibey.component';
const routes: Routes = [
	{
		path: "",
		redirectTo: "/user/card",
		pathMatch: "full",
	},
	{
		path: "user",
		children: [
			{ path: "card", component: UsercardsComponent },
			{ path: "maintenance", component: UsermaintenanceComponent },
			{path:"users", component:UsersLibeyComponent},
			{path:"edit", component:EditUserlibeyComponent}
		],
	},
	{ path: "**", component: AppComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}