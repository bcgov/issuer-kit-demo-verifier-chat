import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Paginated } from '@feathersjs/feathers';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth.service';
import { DataService } from '@app/services/data.service';
import { UtilService } from '@app/services/util.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  @ViewChild('chat') chat: ElementRef;
  @ViewChild('list') list: ElementRef;
  @ViewChildren('message') messages: QueryList<any>;

  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(
    private auth: AuthService,
    private data: DataService,
    private util: UtilService
  ) {
    this.messages$ = data.messages$()
      .pipe(
        map((m: Paginated<any>) => m.data)
      );

    this.users$ = data.users$()
      .pipe(
        map((u: any[]) => u)
      );
  }

  sendMessage(message: string, user: any): void {
    this.data.sendMessage(message, this.util.processTokenPayload(user));
  }

  public get userData$(): Observable<any> {
    return this.auth.userData$;
  }

  ngAfterViewInit() {
    this.scrollToBottom();
    this.messages.changes.subscribe(this.scrollToBottom);
  }
  
  scrollToBottom = () => {
    if (this.messages && this.messages.length) {
      this.list.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
