import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../room';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  room: Room = new Room();
  submitted: boolean = false;
  minimumDate = new Date();

  constructor(private roomService: RoomService, private router: Router) {

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

  newRoom() {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room).subscribe(data => console.log(data), error => console.error(error));
    this.room = new Room();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/rooms'])
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
