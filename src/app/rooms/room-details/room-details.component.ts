import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../../services/room.service';

@Component({
    selector: 'app-room-details',
    templateUrl: './room-details.component.html',
    styleUrls: ['./room-details.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RoomDetailsComponent implements OnInit{
  id!:number
  room!:Room



  constructor(private roomService:RoomService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data);
        this.room = data
      },
      error => console.error(error));
  }
  list(){
    this.router.navigate(['/rooms']);
  }
}
