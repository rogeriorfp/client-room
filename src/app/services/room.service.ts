import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Room } from '../rooms/room';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient:HttpClient) { }

  createRoom(room:Room):Observable<Room>{
    return this.httpClient.post<Room>(`${baseUrl}/rooms`,room);
  }

  getRoom(roomId:number){
    return this.httpClient.get<Room>(`${baseUrl}/rooms/${roomId}`)
  }
  getRoomList():Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${baseUrl}/rooms`);
  }
  updateRoom(roomId:number, room:Room){
    return this.httpClient.put(`${baseUrl}/rooms/${roomId}`,room)
  }
  deleteRoom(roomId:number){
    return this.httpClient.delete(`${baseUrl}/rooms/${roomId}`);
  }
}
