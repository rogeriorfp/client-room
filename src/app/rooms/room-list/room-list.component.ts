import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../room';
import { RoomDetailsComponent } from "src/app/rooms/room-details/room-details.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit{
  rooms:Observable<Room[]> | undefined;
  constructor(private roomService:RoomService, private router:Router) {    
  }
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.rooms = this.roomService.getRoomList();
  }
  deleteRoom(roomId:number){
    this.roomService.deleteRoom(roomId).subscribe(data =>{
      console.log(data);
      this.reloadData();
    },
    error => console.log(error)
    );
  }

  updateRoom(roomId:number){
    this.router.navigate(['/update', roomId]);
  }
  roomDetails(roomId:number){
    this.router.navigate(['/details', roomId]);
  }
}
