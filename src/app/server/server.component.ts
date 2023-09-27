import { Component } from '@angular/core';

// export class để dùng ngoài file này, cụ thể là ở app component
@Component({
  selector: 'app-server',
  // to reference external file, using templateUrl
  styles: [
    `
      .online {
        background-color: #3bb;
      }
      ,
      .offline {
        background-color: #faa999;
      }
    `,
  ],
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: string = '1as123';
  serverStatus: 'offline' | 'online' = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getStatusColor(): 'red' | 'white' {
    return this.serverStatus === 'online' ? 'white' : 'red';
  }
}
