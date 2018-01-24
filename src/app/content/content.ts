export class Content {
  name: string;
  displayName: string;
  bannerImgUrl: string;
  scope: string;
  year: string;
  technologies: string;
  description: string;
};

export const POSSIBLE_CONTENT: Content[] = [
  {
    name: 'emoji-data-visualizer',
    displayName: 'Emoji\nData\nVisualizer',
    bannerImgUrl: '../assets/img/visualizer.png',
    scope: 'Data-Visualization, Real-Time Data Analysis, Full-Stack Web Development',
    year: '2016',
    technologies: 'D3.js, Express, MongoDB, Twitter API',
    description: "This data visualization depicts 1,200 of the most frequent emoji combinations on Twitter. Emojis that are tweeted more often appear larger, and emojis that appear together more often are connected by the boldest red lines. The emojis are limited to 8 connections per icon. To get a closer look at some of the connections, you can stretch apart the graph by dragging the icons."
  },
  {
    name: 'tinyicon',
    displayName: 'TinyIcon\nMosaic\nSelector',
    bannerImgUrl: '../assets/img/tiny_icon.png',
    scope: 'Image Processing, Full-Stack Web Development, SaaS, Server-Side Automation',
    year: '2015',
    technologies: 'Angular 1, Express, Python, PIL, HTML, CSS',
    description: ''
  }
];

//TODO enumerate all identifying content names
//export const PROJECT_NAME_ENUMS 
