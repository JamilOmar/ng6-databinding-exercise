import { Component, OnInit , Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
 // tslint:disable-next-line:no-input-rename
 @Input('srvElement') public element: { type: string, content: string };
  constructor() { }
  ngOnInit() {
  }

}
