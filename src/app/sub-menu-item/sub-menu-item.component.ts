import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {

  constructor() { }

  @Input() hiddenSubMenus: any;
  @Input() subMenuItemName: string;

  ngOnInit() {
  }

}
