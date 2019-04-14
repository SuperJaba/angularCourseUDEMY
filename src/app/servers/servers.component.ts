import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  isUerNameEmpty = true;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
    console.log(event);
  }

  onUserNameReset() {
    console.log(this.isUerNameEmpty);
    this.userName = '';
    document.getElementById('inputName').value = '';
  }

  onUpdateUserName(event: Event) {
    console.log(event);
    this.userName = (event.target as HTMLInputElement).value;
    if (this.userName !== '') {
      this.isUerNameEmpty = false;
    } else {
      this.isUerNameEmpty = true;
      document.getElementById('resetBTN').disabled = true;
    }
  }

}
