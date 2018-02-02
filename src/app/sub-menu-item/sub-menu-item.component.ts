import { Component, OnInit, Input } from '@angular/core';
import { SubMenuItemsEnum } from '../app.component';

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {

  @Input() 
  set subMenuItemName(subMenuItemName: string) {
    this.subMenuItemDisplayName = subMenuItemContentMasterObj[subMenuItemName].displayName;
    this.yearString = subMenuItemContentMasterObj[subMenuItemName].yearString;
  }

  public subMenuItemDisplayName: string;
  public yearString: string;

  constructor() { 
  }

  private getSubMenuItemContent(subMenuItemName: string): any {
  	if (subMenuItemName && !!subMenuItemContentMasterObj[subMenuItemName]) {
      return subMenuItemContentMasterObj[subMenuItemName]
    } else {
      return null;
    }
  }

  ngOnInit() {
  }
}

let subMenuItemContentMasterObj: any = {};

subMenuItemContentMasterObj[SubMenuItemsEnum.ACCESS_POINT_MONITORING] = {
  displayName: 'Controller Monitoring',
  yearString: "14"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.CHAMROSH] = {
  displayName: 'Chamrosh',
  yearString: "18"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.DHCP_LEASE_MANAGEMENT] = {
  displayName: 'DHCP Lease MGMT',
  yearString: "14"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.EMOJI_DATA_VISUALIZER] = {
  displayName: 'Emoji Data Vizualizer',
  yearString: "16"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.FACE_DETECTION] = {
  displayName: 'Face Recognition',
  yearString: "13"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.FENATURE] = {
  displayName: 'Fenature',
  yearString: "18"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.PARTY_STORE] = {
  displayName: 'Party Store',
  yearString: "17"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS] = {
  displayName: 'Photo Mosaic Videos',
  yearString: "14"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.SERVICES] = {
  displayName: 'Services & Pricing',
  yearString: ""  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.THREE_D_SCRIPTING] = {
  displayName: 'Three-D Scripting',
  yearString: "15"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.TINYICON] = {
  displayName: 'TinyIcon',
  yearString: "15"
};
subMenuItemContentMasterObj[SubMenuItemsEnum.TWIN_PRIME] = {
  displayName: 'Twin Prime',
  yearString: "14 - 15"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.TWITTER_BOT] = {
  displayName: 'Twitter Bot',
  yearString: "15 - 18"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.WICKR] = {
  displayName: 'Wickr',
  yearString: "16"  
};
subMenuItemContentMasterObj[SubMenuItemsEnum.ZOOSK] = {
  displayName: 'Zoosk',
  yearString: "16 - 17"  
};
