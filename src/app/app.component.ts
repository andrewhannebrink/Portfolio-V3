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
import { MAIN_MENU_ICON_LINKS } from './constants';

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
  SERVICES: 'services'
};

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

  public currentSubMenu: string = null;
  public currentSubMenuList: string = null;
  public SubMenuItemsEnum: any;
  public hoveredSubMenuItem: string = null; 
  public exitedInitialMainMenu: boolean = false;
  public mainMenuIconLinks: any = MAIN_MENU_ICON_LINKS;

  public hiddenMainMenuItems = {
    professional: false,
    consulting: false,
    frontEnd: false,
    backEnd: false,
    imageProcessing: false,
    personalProjects: false,
    filler: false
  }

  public possibleSubMenuItemNames = Object.keys(SubMenuItemsEnum).map(k => SubMenuItemsEnum[k]);

  constructor(public appState: AppState) { 
    this.SubMenuItemsEnum = SubMenuItemsEnum;
  }

  private colors: any = {
    color1: '#c8472c',
    color2: '#412a1e',
    color3: '#f8de3c',
    color4: '#fefefe',
    color5: '#48acf4',
    color6: '#105edd',
    color7: '#0b3075'
  }

  public getSubMenuItemStyle(subMenuItemName: string, currentSubMenu: any): any {
    let style: any = {};
    if (currentSubMenu === 'professional') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['3/4', '5/8'], this.colors.color4, this.colors.color1, this.colors.color3);
    }
    if (currentSubMenu === 'consulting') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['5/7', '6/8'], this.colors.color2, this.colors.color3, this.colors.color5);
    }
    if (currentSubMenu === 'frontEnd') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['3/4', '3/6'], this.colors.color4, this.colors.color7, this.colors.color5);
    }
    if (currentSubMenu === 'backEnd') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['3/3', '5/8'], this.colors.color3, this.colors.color2, this.colors.color5);
    }
    if (currentSubMenu === 'imageProcessing') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['4/5', '2/5'], this.colors.color2, this.colors.color5, this.colors.color3);
    }
    if (currentSubMenu === 'personalProjects') {
      style = this.buildSubMenuItemStyle(currentSubMenu, subMenuItemName, 'down', ['4/5', '4/7'], this.colors.color1, this.colors.color3, this.colors.color5);
    }
    return style;
  }

  public buildSubMenuItemStyle(currentSubMenu: string, subMenuItemName: string, 
      direction: string, startingGridPosition: string[], textColor: string, bgColor: string, bgColorHover: string): any { 
    let gridPosition: string[];
    let style: any = {};
    gridPosition = this.getSubMenuGridPosition(currentSubMenu, subMenuItemName, direction, startingGridPosition);
    style['grid-row'] = gridPosition[0];
    style['grid-column'] = gridPosition[1];
    style['color'] = textColor;
    style['background-color'] = this.hoveredSubMenuItem === subMenuItemName ? bgColorHover : bgColor;
    return style;
  }

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

  public showSubMenu(menuItem: string): void {
    this.exitedInitialMainMenu = true;
    this.currentSubMenu = menuItem;
    this.hideAllBut(menuItem);
  }

  // Returns arrays for grid-rows and grid-columns css properties like so: [ '1/2', '3/5' ]
  public getSubMenuGridPosition(mainMenuItem: string, subMenuItem: string, direction: string, startingPos: string[]): string[] {
    let indexToIncrement, startingRowsOrCols, nextPos: string[], nextRowsOrCols;
    if (direction === 'down') {
      indexToIncrement = 0;
      startingRowsOrCols = startingPos[indexToIncrement].split('/').map(x => parseInt(x));
    } else {
      indexToIncrement = 1;
      startingRowsOrCols = startingPos[indexToIncrement].split('/').map(x => parseInt(x));
    }
    let i = MenuRelations[mainMenuItem].indexOf(subMenuItem)
    nextRowsOrCols = startingRowsOrCols.map(x => (x + i).toString()).join('/');
    nextPos = startingPos;
    nextPos[indexToIncrement] = nextRowsOrCols;
    return nextPos;
  }

  public checkToShowSubMenuItem(subMenuItem: string) {
    if (this.currentSubMenu === null) {
      return;
    } else if (this.currentSubMenu && 
        MenuRelations.hasOwnProperty(this.currentSubMenu) && 
        MenuRelations[this.currentSubMenu].includes(subMenuItem)) {
      return true;
    } else {
      return false;
    }
  }

  public showMainMenu(): void {
    this.currentSubMenu = null;
    this.showAllMainMenuItems();
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }


}

export const MenuRelations = {
  professional: [
    //SubMenuItemsEnum.FENATURE,
    //SubMenuItemsEnum.CHAMROSH,
    SubMenuItemsEnum.ZOOSK,
    SubMenuItemsEnum.WICKR,
    SubMenuItemsEnum.TWIN_PRIME,
    SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
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
    SubMenuItemsEnum.DHCP_LEASE_MANAGEMENT,
    SubMenuItemsEnum.ACCESS_POINT_MONITORING
  ],
  imageProcessing: [
    SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    SubMenuItemsEnum.TINYICON,
    SubMenuItemsEnum.TWITTER_BOT,
    SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
    SubMenuItemsEnum.THREE_D_SCRIPTING,
    SubMenuItemsEnum.FACE_DETECTION
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
