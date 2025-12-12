import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { UpdateRoomComponent } from './rooms/update-room/update-room.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({ declarations: [
        AppComponent,
        CreateRoomComponent,
        RoomDetailsComponent,
        RoomListComponent,
        UpdateRoomComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule], providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
