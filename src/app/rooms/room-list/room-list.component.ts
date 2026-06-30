import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { Router } from "@angular/router";
import { RoomService } from '../../services/room.service';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
