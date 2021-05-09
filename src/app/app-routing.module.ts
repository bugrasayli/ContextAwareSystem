import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { AdressComponent } from './adress/adress.component';
import { HotelComponent } from './hotel/hotel.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'hotel',component:HotelComponent},
  {path:'activity',component:ActivityComponent},
  {path:'address',component:AdressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


