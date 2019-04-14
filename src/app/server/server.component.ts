import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID: number = 22222;
    serverStatus: string = 'offline';
    constructor() { }

    getServerStatus() {
        return this.serverStatus;
    }
}
