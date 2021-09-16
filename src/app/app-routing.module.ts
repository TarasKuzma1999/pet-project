import { MainTableComponent } from './main-table/main-table.component';
import { UserComponent } from './user/user.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRouters: Routes = [
    { path: '', component: MainTableComponent },
    { path: 'features/:id/:username', component: UserComponent },
    { path: '**', redirectTo: '/' }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}