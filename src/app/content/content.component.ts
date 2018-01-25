import { Component, OnInit } from '@angular/core'; 
import { Content, POSSIBLE_CONTENT } from './content';
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

  public getCurrentBannerCssUrlString: Function = function () {
    return 'url("' + this.currentContent.bannerImgUrl + '")';
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.params.pluck<string>('urlName')
      .forEach(urlName => this.getContent(urlName))
      .catch(() => this.currentContent = POSSIBLE_CONTENT[0]);
  }
 
  private getContent(urlName: string): void {
    let i;
    let currentContent = null;
    for (i = 0; i < POSSIBLE_CONTENT.length; i += 1) {
      if (POSSIBLE_CONTENT[i].urlName === urlName) {
        currentContent = POSSIBLE_CONTENT[i];
      }
    }
    this.currentContent = currentContent ? currentContent : POSSIBLE_CONTENT[0];
  }
}
