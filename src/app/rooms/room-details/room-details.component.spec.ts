import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsComponent } from './room-details.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, CommonModule, FormsModule],
      declarations: [RoomDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
