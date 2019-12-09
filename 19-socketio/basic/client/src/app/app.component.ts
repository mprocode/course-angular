import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { SocketIoService } from './socket-io.service';
import { Subscription } from 'rxjs';
import { MatList, MatListItem } from '@angular/material/list';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private messages: Message[] = [];
  private subscriptionMessages: Subscription;
  private subscriptionList: Subscription;
  private nickname: string;
  private message: string;

  @ViewChild(MatList, { read: ElementRef, static: true }) list: ElementRef;
  @ViewChildren(MatListItem) listItems: QueryList<MatListItem>;
  //https://angular.io/api/core/ViewChildren
  
  constructor(
    private socketService: SocketIoService) {}

  ngOnInit() {
    this.subscriptionMessages = this.socketService.message$
      .subscribe((m: Message) => {
          this.messages.push(m);
          //Nao funciona pois a mensagem ainda nao foi adicionada
          //this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
          console.log(this.list);
        });
  }


  ngAfterViewInit() {
    this.subscriptionList = this.listItems.changes.subscribe(
      (l) => {
        //console.log(l);
        this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
      }
    )
  }

  ngOnDestroy() {
    this.subscriptionMessages.unsubscribe();
    this.subscriptionList.unsubscribe();
  }

  send() {
    this.socketService.send({
      from: this.nickname, 
      message: this.message });
    this.message = "";
  }
}
