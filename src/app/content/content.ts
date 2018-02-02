import { SubMenuItemsEnum } from '../app.component';
export class Content {
  id: number;
  links: any[];
  urlName: string;
  displayName: string;
  bannerImgUrl: string;
  scope: string;
  year: string;
  technologies: string;
  description: string;
};

export const LINK_TYPES = {
  GIT: 'git',
  LIVE: 'live',
  TWITTER: 'twitter',
  VIMEO: 'vimeo'
};

export const POSSIBLE_CONTENT: Content[] = [
  {
    id: 1,
    links: [
      {
        linkType: LINK_TYPES.LIVE,
        url: 'http://www.tinyicon.co/m/info',
      },
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/emoji-data-visualizer'
      }
    ],
    urlName: SubMenuItemsEnum.EMOJI_DATA_VISUALIZER,
    displayName: 'Emoji\nData\nVisualizer',
    bannerImgUrl: '../assets/img/visualizer.png',
    year: '2016',
    scope: 'Data-Visualization, Real-Time Data Analysis, Full-Stack Web Development',
    technologies: 'D3.js, Express, MongoDB, Twitter API',
    description: "This data visualization depicts 1,200 of the most frequent emoji combinations on Twitter. Emojis that are tweeted more often appear larger, and emojis that appear together more often are connected by the boldest red lines. The emojis are limited to 8 connections per icon. To get a closer look at some of the connections, you can stretch apart the graph by dragging the icons."
  },
  {
    id: 2,
    links: [
      {
        linkType: LINK_TYPES.LIVE,
        url: 'http://www.tinyicon.co',
      },
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/api'
      }
    ],
    urlName: SubMenuItemsEnum.TINYICON,
    displayName: 'TinyIcon\nMosaic\nSelector',
    bannerImgUrl: '../assets/img/tiny_icon.png',
    year: '2015',
      scope: 'Image Processing, Full-Stack Web Development, API Construction, UI/UX Design, SaaS, Server-Side Automation',
    technologies: 'Angular 1, Express, Python, PIL, HTML, Canvas, CSS',
    description: ''
  },
  {
    id: 3,
    links: [
      {
        linkType: LINK_TYPES.VIMEO,
        url: 'https://vimeo.com/131334222'
      },
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/blender'
      }

    ],
    urlName: SubMenuItemsEnum.THREE_D_SCRIPTING,
    displayName: '3D\nScripting\nWith\nBlender',
    bannerImgUrl: '../assets/img/three-d-scripting.png',
    year: '2015',
    scope: 'Video Art, Euclidean Geometry, Matrix Algebra, Object Oriented Programming',
    technologies: 'Python, Blender, bpl (Blender-Python Module)',
    description: ''
  },
  {
    id: 4,
    links: [
      {
        linkType: LINK_TYPES.TWITTER,
        url: 'https://twitter.com/tiny_phenom'
      },
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/photo-mosaic-video-generator/blob/master/readme.md'
      }
    ],
    urlName: SubMenuItemsEnum.TWITTER_BOT,
    displayName: 'Photo-Mosaic\nTwitter\nBot',
    bannerImgUrl: '../assets/img/tiny_peon.png',
    year: '2015-Present',
    scope: 'Image Processing, Viral Marketing, Back-End Web Development, Twitter API, Server-Side Automation',
    technologies: 'JavaScript, Node, Python, PIL, AWS, EC2, Crontab',
    description: ''
  },
  {
    id: 5,
    links: [
      {
        linkType: LINK_TYPES.VIMEO,
        url: 'http://www.vimeo.com/tinyicon'
      }
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/photo-mosaic-video-generator/blob/master/readme.md'
      },
    ],
    urlName: SubMenuItemsEnum.PHOTO_MOSAIC_VIDEOS,
    displayName: 'Photo-Mosaic\nVideos',
    bannerImgUrl: '../assets/img/photo-mosaic-videos.png',
    year: '2014',
    scope: 'Video Processing, Video Art, System Process Automation',
    technologies: 'Python, PIL, ffmpeg',
    description: ''
  },
  {
    id: 6,
    links: [
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/DHCPACK-Logger-and-Infoblox-Lease-Updater'
      }
    ],
    urlName: SubMenuItemsEnum.DHCP_LEASE_MANAGEMENT,
    displayName: 'DHCP\nLease\nManagemnet',
    bannerImgUrl: '../assets/img/wustl.png',
    year: '2014',
    scope: 'Network Engineering, Server-Side Scripting, Database Administration, Automation, Command Line Tooling',
    technologies: 'Python, SQL, Infoblox API',
    description: ''
  },
  {
    id: 7,
    links: [
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/Controller-Logging-and-Monitoring'
      }
    ],
    urlName: SubMenuItemsEnum.ACCESS_POINT_MONITORING,
    displayName: 'Access\nPoint\nMonitoring',
    bannerImgUrl: '../assets/img/wustl.png',
    year: '2014',
    scope: 'Network Engineering, Server-Side Scripting, Database Administration, Automation, Command Line Tooling',
    technologies: 'Python, SQL, Cisco Controller API',
    description: ''
  },
  {
    id: 8,
    links: [
      {
        linkType: LINK_TYPES.GIT,
        url: ''
      }
    ],
    urlName: SubMenuItemsEnum.FACE_DETECTION,
    displayName: 'C++\nFace\nDetection',
    bannerImgUrl: '../assets/img/face-detection.png',
    year: '2013',
    scope: 'Computer Vision, Matrix Algrebra, Feature Recogntion, Object Oriented Programming',
    technologies: 'C++',
    description: 'https://github.com/andrewhannebrink/Facial-Recognition'
  }
];

//TODO enumerate all identifying content names
//export const PROJECT_NAME_ENUMS 
