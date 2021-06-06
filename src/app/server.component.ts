import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  createServer() {
    this.serverCreated = true;
    this.serverStatus = 'server was created. server name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
}
