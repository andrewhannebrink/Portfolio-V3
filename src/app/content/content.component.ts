import { Component, OnInit } from '@angular/core'; 
import { Content, POSSIBLE_CONTENT, LINK_TYPES } from './content';
import { ActivatedRoute, Router }   from '@angular/router';
import 'rxjs/add/operator/pluck';
//import { Apollo } from 'apollo-angular';
//import gql from 'graphql-tag';


@Component({
  selector: 'andrew-content',
  templateUrl: '../templates/content.template.html',
  styleUrls: ['../app.component.scss'],
})

export class ContentComponent implements OnInit {
  public currentContent: Content;

  public getCurrentBannerBackgroundImageCss: Function = function(): string {
    let styleStr = 'url("' + this.currentContent.bannerImgUrl + '")';
    return styleStr; 
  };

  public getBannerRepeat(): string {
    let styleStr = 'repeat',
    bannerImgUrl = this.currentContent.bannerImgUrl;

    if (bannerImgUrl.includes('wustl') ||
      bannerImgUrl.includes('twin-prime') ||
      bannerImgUrl.includes('zoosk') || 
      bannerImgUrl.includes('wickr')) {

      styleStr = 'no-repeat';
    }
    return styleStr;
  }

  public getBannerPosition(): string {
    let styleStr = 'left top',
        bannerImgUrl = this.currentContent.bannerImgUrl;
    if (bannerImgUrl.includes('wustl') ||
      bannerImgUrl.includes('twin-prime') ||
      bannerImgUrl.includes('zoosk') || 
      bannerImgUrl.includes('wickr')) {
      
      styleStr = 'center';
    } else if (bannerImgUrl.includes('three-d-scripting') || 
        bannerImgUrl.includes('photo-mosaic-videos')) {
      styleStr = 'left bottom'
    }
    return styleStr;
  }

  public getIconBackgroundClass(linkObj: { linkType: string, url: string }): string {
    const type = linkObj.linkType;
    if (type === LINK_TYPES.GIT) {
      return 'github-icon';
    } else if (type === LINK_TYPES.LIVE) {
      return 'live-link-icon';
    } else if (type === LINK_TYPES.TWITTER) {
      return 'twitter-icon';
    } else if (type === LINK_TYPES.VIMEO) {
      return 'vimeo-icon';
    } else {
      return 'live-link-icon';
    }
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      try {
        this.getContent(params['urlName'])
      } catch (e){
        this.currentContent = POSSIBLE_CONTENT[0];
      }
    })
  }
 
  private getContent(urlName: string): void {
    let i,
        currentContent = null;
    for (i = 0; i < POSSIBLE_CONTENT.length; i += 1) {
      if (POSSIBLE_CONTENT[i].urlName === urlName) {
        currentContent = POSSIBLE_CONTENT[i];
      }
    }
    this.currentContent = currentContent ? currentContent : POSSIBLE_CONTENT[0];
  }
}
