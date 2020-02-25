import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Header2Component } from './header2/header2.component';



const routes: Routes = [{path: 'contact' ,component: ContactComponent},
{path: '' ,component: Header2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








