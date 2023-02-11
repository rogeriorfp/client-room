import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { UpdateRoomComponent } from './rooms/update-room/update-room.component';

const routes: Routes = [
  {path: 'details/:id', component: RoomDetailsComponent},
  {path: 'update/:id', component: UpdateRoomComponent},
  {path: 'add', component: CreateRoomComponent},
  {path:'rooms', component: RoomListComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
