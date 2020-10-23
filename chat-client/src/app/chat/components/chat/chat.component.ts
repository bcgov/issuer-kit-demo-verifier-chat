import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { Paginated } from '@feathersjs/feathers';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '@app/services/auth.service';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private el: ElementRef, private auth: AuthService, private data: DataService) {
    this.messages$ = data.messages$()
      .pipe(
        map((m: Paginated<any>) => m.data),
        tap(() => el.nativeElement.querySelector('.chat').scrollIntoView({ behavior: 'smooth' }))
      );

    this.users$ = data.users$()
      .pipe(
        map((u: any[]) => u)
      );
  }

  sendMessage(message: string): void {
    this.data.sendMessage(message);
  }
}
