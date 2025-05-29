import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { CanalService } from './canal.service';
import { WebSocketAPI } from './message.service';

export const routes = [
  { path: '', component: ChatComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PerfectScrollbarModule,
    SharedModule
  ],
  providers:[ CanalService, WebSocketAPI]
})
export class ChatModule { }
