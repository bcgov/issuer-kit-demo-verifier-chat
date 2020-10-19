import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor() { }

  sendMessage(message: string) { }

  logOut() { }

}
