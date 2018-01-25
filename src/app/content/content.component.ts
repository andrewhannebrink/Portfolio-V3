import { Component, OnInit } from '@angular/core'; 
import { ContentComponent, POSSIBLE_CONTENT } from './content';
//import { Apollo } from 'apollo-angular';
//import gql from 'graphql-tag';


@Component({
  selector: 'andrew-content',
  templateUrl: '../templates/content.template.html',
  styleUrls: ['../app.component.scss'],
})

export class ContentComponent implements OnInit {
  currentContent: any;
  constructor() {
    this.currentContent = POSSIBLE_CONTENT[2];
    this.currentContentName: 'emoji-data-visualizer';
    this.getCurrentBannerCssUrlString = function () {
      return 'url("' + this.currentContent.bannerImgUrl + '")';
    };
  }
  ngOnInit() {
  }
}
