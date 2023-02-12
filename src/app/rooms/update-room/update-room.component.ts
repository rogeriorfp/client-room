import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RoomService } from 'src/app/services/room.service';
import { Room } from "../room";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  id!: number;
  room!: Room;
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService) { }

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

  meetingDate(aDate: string) {
    const data =  aDate.split('-');
    const meetingDate = new Date();
    meetingDate.setFullYear(Number(data[0]),Number(data[1]) - 1,Number(data[2]));
    this.room.date = meetingDate;
  }


  changeStartHour(anHour: string) {
    const horario = anHour.split(':');
    const meetingDate = new Date(this.room.date.getTime());
    meetingDate.setHours(Number(horario[0]), Number(horario[1]));

    this.room.startHour = meetingDate;
  }

  changeEndHour(anHour: string) {
    const horario = anHour.split(':');
    const meetingDate = new Date(this.room.date.getTime());
    meetingDate.setHours(Number(horario[0]), Number(horario[1]));
    this.room.endHour = meetingDate;
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/rooms'])
  }

  onSubmit() {
    this.updateRoom();
  }
}
