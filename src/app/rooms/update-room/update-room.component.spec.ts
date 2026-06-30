import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomComponent } from './update-room.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';

describe('UpdateRoomComponent', () => {
  let component: UpdateRoomComponent;
  let fixture: ComponentFixture<UpdateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, CommonModule, FormsModule],
      declarations: [ UpdateRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
