/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { PostsService } from './posts/posts.service';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './templates/app.template.html',

  providers: [PostsService]
})
export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) { }


  public hiddenMainMenuItems = {
    professional: false,
    consulting: false,
    frontEnd: false,
    backEnd: false,
    imageProcessing: false,
    personalProjects: false,
    filler: false
  }

  public hiddenSubMenus = {
    professional: true,
    consulting: true,
    frontEnd: true,
    backEnd: true,
    imageProcessing: true,
    personalProjects: true
  }

  public currentSubMenu: string = null;
  public currentSubMenuList: string = null;

  public hideAllBut(menuItem: string): void {
    let p;
    for (p in this.hiddenMainMenuItems) {
      if (this.hiddenMainMenuItems.hasOwnProperty(p)) {
        if (p !== menuItem) {
          this.hiddenMainMenuItems[p] = true;
        } else {
          this.hiddenMainMenuItems[p] = false;
        }
      }
    }
  }

  public showAllMainMenuItems(): void {
    let p;
    for (p in this.hiddenMainMenuItems) {
      if (this.hiddenMainMenuItems.hasOwnProperty(p)) {
        this.hiddenMainMenuItems[p] = false;
      }
    }
  }

  public hideAllSubMenus(): void {
    let p;
    for (p in this.hiddenSubMenus) {
      if (this.hiddenSubMenus.hasOwnProperty(p)) {
        this.hiddenSubMenus[p] = true;
      }
    }
  }

  public showSubMenu(menuItem: string): void {
    this.currentSubMenu = menuItem;
    this.hideAllBut(menuItem);
    const gridPositions = this.getSubMenuGridPositions(menuItem, 'down');
  }

  public getSubMenuGridPositions(menuItem: string, direction: string): string[] {
    const n = MenuRelations[menuItem].length;
    const startingPos = ['2/3', '5/8']
    let i, indexToIncrement, startingRowsOrCols, nextPos, nextRowsOrCols;
    if (direction === 'down') {
      indexToIncrement = 0;
      startingRowsOrCols = startingPos[indexToIncrement].split('/').map(x => parseInt(x));
    } else {
      indexToIncrement = 1;
      startingRowsOrCols = startingPos[indexToIncrement].split('/').map(x => parseInt(x));
    }
    for (i = 0; i < n; i += 1) {
      nextRowsOrCols = startingRowsOrCols.map(x => (x + i).toString()).join('/');
    }
    return ['',''];
  }

  public checkToShowSubMenuItem(subMenuItem: string): boolean {
    console.log(this.currentSubMenu);
    console.log(subMenuItem);
    if (MenuRelations.hasOwnProperty(this.currentSubMenu) && MenuRelations[this.currentSubMenu].includes(subMenuItem)) {
      console.log('t');
      return true;
    } else {
      console.log('f');
      return false;
    }
  }

  public showMainMenu(): void {
    this.hideAllSubMenus();
    this.showAllMainMenuItems();
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

export const SubMenuItemsEnum = {
  CHAMROSH : 'chamrosh',
  FENATURE : 'fenature',
  PARTY_STORE: 'party-store',
  EMOJI_DATA_VISUALIZER : 'emoji-data-visualizer',
  TINYICON : 'tinyicon',
  THREE_D_SCRIPTING : '3d-scripting',
  TWITTER_BOT : 'twitter-bot',
  PHOTO_MOSAIC_VIDEOS : 'photo-mosaic-videos',
  DHCP_LEASE_MANAGEMENT : 'dhcp-lease-management',
  ACCESS_POINT_MONITORING : 'access-point-monitoring',
  FACE_DETECTION : 'face-detection',
  ZOOSK : 'zoosk',
  WICKR : 'wickr',
  TWIN_PRIME : 'twin-prime',
  WUSTL: 'wustl',
  SERVICES: 'services',
};

export const MenuRelations = {
  professional: [
    //SubMenuItemsEnum.FENATURE,
    //SubMenuItemsEnum.CHAMROSH,
    SubMenuItemsEnum.ZOOSK,
    SubMenuItemsEnum.WICKR,
    SubMenuItemsEnum.TWIN_PRIME,
    SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
    SubMenuItemsEnum.WUSTL,
    SubMenuItemsEnum.DHCP_LEASE_MANAGEMENT,
    SubMenuItemsEnum.ACCESS_POINT_MONITORING
  ],
  consulting: [
    //SubMenuItemsEnum.FENATURE,
    //SubMenuItemsEnum.CHAMROSH,
    //SubMenuItemsEnum.PARTY-STORE,
    SubMenuItemsEnum.SERVICES
  ],
  frontEnd: [
    //SubMenuItemsEnum.FENATURE,
    //SubMenuItemsEnum.CHAMROSH,
    //SubMenuItemsEnum.PARTY-STORE,
    SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    SubMenuItemsEnum.ZOOSK,
    SubMenuItemsEnum.WICKR,
    SubMenuItemsEnum.TWIN_PRIME,
    SubMenuItemsEnum.TINYICON
  ], 
  backEnd: [
    //SubMenuItemsEnum.FENATURE,
    //SubMenuItemsEnum.CHAMROSH,
    SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    SubMenuItemsEnum.TWITTER_BOT,
    SubMenuItemsEnum.TINYICON,
    SubMenuItemsEnum.TWIN_PRIME,
    SubMenuItemsEnum.WUSTL,
    SubMenuItemsEnum.DHCP_LEASE_MANAGEMENT,
    SubMenuItemsEnum.ACCESS_POINT_MONITORING
  ],
  imageProcessing: [
    SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    SubMenuItemsEnum.TINYICON,
    SubMenuItemsEnum.TWITTER_BOT,
    SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
    SubMenuItemsEnum.THREE_D_SCRIPTING
  ],
  personalProjects: [
    SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    SubMenuItemsEnum.TINYICON,
    SubMenuItemsEnum.TWITTER_BOT,
    SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
    SubMenuItemsEnum.THREE_D_SCRIPTING
  ]
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
