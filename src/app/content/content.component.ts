import { Component, OnInit } from '@angular/core'; 
//import { Apollo } from 'apollo-angular';
//import gql from 'graphql-tag';

const content = [
  {
    name: 'Emoji\nData\nVisualizer',
    scope: 'Data-Visualization, Real-Time Data Analysis, Full-Stack Web Development',
    year: '2016',
    technologies: 'D3.js, Express, MongoDB, Twitter API',
    description: "This data visualization depicts 1,200 of the most frequent emoji combinations on Twitter. Emojis that are tweeted more often appear larger, and emojis that appear together more often are connected by the boldest red lines. The emojis are limited to 8 connections per icon. To get a closer look at some of the connections, you can stretch apart the graph by dragging the icons."
  }
];

interface QueryResponse{
  profile
}

@Component({
  selector: 'andrew-content',
  templateUrl: '../templates/content.template.html',
//  template: `
//    <div class="profile">
//        <div class="header">Profile</div>
//        <div class="avatar">
//        	<img height="150" width="150" src="http://www.iconninja.com/files/929/296/21/headset-person-man-avatar-support-male-young-icon.svg" alt="Avatar">
//        </div>
//        <div class="name">{{currentProfile.username}}</div>
//        <div class="separateName"></div>
//        <div class="description">Quis potenti nam lacus eros euismod
//            Fringilla posuere mollis quisque pellentesque a ad amet primis dictum
//            Morbi viverra orci duis interdum massa tortor hac ipsum litora
//            Himenaeos quis ornare pellentesque quisque lacus
//            Dictum conubia consectetur curae amet ultrices lorem orci mauris ligula sit torquent</div>
//    </div>
//  `,
  styleUrls: ['../app.component.scss']
})
export class ContentComponent implements OnInit {
  currentContent: any;
  constructor() {
    this.currentContent = content[0];
  }
  ngOnInit() {
  }
}
