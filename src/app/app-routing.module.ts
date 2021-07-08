import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HimeComponent } from './hime/hime.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', component:HimeComponent},
  {path:'product', component:ProductComponent},
  {path: 'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
