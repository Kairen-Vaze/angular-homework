import { Component, OnInit } from '@angular/core';
import { ClickProperties } from './servers.model';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  clickProperties: ClickProperties = {
    clickTime: 0,
    styleText: 'black',
  };
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created!';
  serverName: string = 'testserver';
  isServerCreated: boolean = false;
  serverList: string[] = ['Test server', 'Test server 2'];
  isDisplayDetail: boolean = false;
  totalClickTimes: ClickProperties[] = [this.clickProperties];
  clickTimes: number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer(): void {
    const creationTime: number = 1;
    this.isServerCreated = true;
    this.serverCreationStatus =
      'Server was created with the name: ' + this.serverName;
    this.serverList.push(`New server created ${+creationTime}`);
  }

  onUpdateServerName({ target }: Event): void {
    const eventTarget = <HTMLInputElement>target;
    this.serverName = eventTarget.value;
  }

  toggleDisplayDetail() {
    this.isDisplayDetail = !this.isDisplayDetail;
    this.clickTimes += 1;
    
    // this.totalClickTimes.push({});
  }
  // getBackgroundColor(): 'cyan' | 'black' {
  //   return this.clickTimes >= 5 ? 'cyan' : 'black';
  // }
  /** Cách làm ở đây sẽ là: Tạo một biến gì đó liên quan đến class
   * Sau đó, dùng một hàm để check, và add class đó vào
   */

}
