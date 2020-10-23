import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

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
  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(
    private el: ElementRef,
    private auth: AuthService,
    private data: DataService,
    private util: UtilService
  ) {
    this.messages$ = data.messages$()
      .pipe(
        map((m: Paginated<any>) => m.data),
        tap(() => this.el.nativeElement.querySelector('.chat').scrollIntoView({ behavior: 'smooth' }))
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

}
