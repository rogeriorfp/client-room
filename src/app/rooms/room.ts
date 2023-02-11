export class Room {
  constructor() { }
  id!: number;
  name!: string;
  date!: Date;
  startHour!: Date;
  endHour!: Date;
  active: boolean = true;
}