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
    description: "●\n\n●\n\n●\n\n●"
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
    description: ""
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
    year: '2015 - Present',
    scope: 'Image Processing, Viral Marketing, Back-End Web Development, Twitter API, Server-Side Automation',
    technologies: 'JavaScript, Node, Python, PIL, AWS, EC2, Crontab',
    description: "● Engineered high-traffic Twitter bot (~15k tweets/month, >100k lifetime tweets, >10k followers) that processes emoji photo-mosaics of each image tweeted to it using Python Imaging Library and npm Twit module.\n\n● Rate-limited tweets and queued them in MongoDB for delayed reply when experiencing high-traffic."
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
    description: "●\n\n●\n\n●\n\n●"
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
    description: ""
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
    description: "   These are Python scripts I wrote for Washington University's system administrators and security analysts. In 2014, the university’s Network Operating Center was overseeing a shift from Meru to Cisco wireless routing equipment. During this transition, though, they found themselves writing a mess of repetitive commands across the Cisco and Meru API’s for performance monitoring. To ease this pain, I wrote these scripts to automate the process of session lookup across networks. After completion, instead of repeatedly signing in out of convoluted 3rd-party CLI’s everytime we wanted to perform a network check, we could perform dynamic user lookups for either Meru or Cisco systems all from one command-line system. Used over the course of a year as we completed the transition to Cisco equipment, these scripts saved the university an estimated $25,000 in labor time."
  },
  {
    id: 8,
    links: [
      {
        linkType: LINK_TYPES.GIT,
        url: 'https://github.com/andrewhannebrink/Facial-Recognition'
      }
    ],
    urlName: SubMenuItemsEnum.FACE_DETECTION,
    displayName: 'C++\nFace\nDetection',
    bannerImgUrl: '../assets/img/face-detection.png',
    year: '2013',
    scope: 'Computer Vision, Matrix Algrebra, Feature Recogntion, Object Oriented Programming',
    technologies: 'C++',
    description: ''
  },
  {
    id: 9,
    links: [],
    urlName: SubMenuItemsEnum.ZOOSK,
    displayName: 'Zoosk',
    bannerImgUrl: '../assets/img/zoosk.png',
    year: '2016 - 2017',
    scope: '',
    technologies: '',
    description: "● Rapidly delivered features for the world’s 2nd largest dating platform with Angular, Node.js, and Google Closure UI/Library for desktop and mobile browsers in a continuous integration development cycle.\n\n● Implemented country-specific UI experiments that simplified profile interactions and improved user experience, resulting in 30% more accepted greetings, and 7% more bookings.\n\n● Led technical makeover of our Help Center which curtailed customer support emails, saving us from hiring a full-time employee, while still dynamically supplying users contact methods in 23 languages across 39 locales.\n\n● Won 1st place in company Hack Day by allowing users to donate to charities during special in-app purchases."
  },
  {
    id: 10,
    links: [],
    urlName: SubMenuItemsEnum.WICKR,
    displayName: 'Wickr',
    bannerImgUrl: '../assets/img/wickr.png',
    year: '2016',
    scope: '',
    technologies: '',
    description: "● Worked in a 6-engineer team to develop a web and iOS app for video conferencing, live document and image sharing, and synchronized video streaming using AngularJS, WebRTC via Licode, and UI-Bootstrap.\n\n● Greatly reduced vectors for XSS attacks by 99.9% by architecting app-wide form validation using combination of custom and existing Angular directives for sanitizing inputs and whitelisting characters.\n\n● Followed JavaScript OOP principles to create module for panning and zooming through content in real time.\n\n● Migrated front-end build and unit test processes from Grunt to Gulp, enabling us to build with ES6 via Babel.\n\n● Constructed E2E and unit tests for deployed API instances using Jasmine, automating the tasks with Grunt.\n\n● Enabled users to switch cameras, microphones, and external speakers using the WebRTC API.\n\n● Implemented in-browser keyboard shortcuts for navigating menus, browsing content, and controlling videos."
  },
  {
    id: 11,
    links: [],
    urlName: SubMenuItemsEnum.TWIN_PRIME,
    displayName: 'Twin\nPrime',
    bannerImgUrl: '../assets/img/twin-prime.png',
    year: '2014 - 2015',
    scope: '',
    technologies: '',
    description: "● Followed scrum agile development methodology in a team of three engineers using Jira, and Pivotal Tracker to build a web dashboard for customers to visualize speed improvements of their mobile applications.\n\n● Developed RESTful user management API for new customer dashboard account activation, sign-in, sign-out, and password recovery using Python, Django and the Django Rest Framework.\n\n● Built custom Angular controllers and services for communication with user management and mobile data API’s.\n\n● Implemented user authentication with CSRF tokens, session cookies, and email password recovery.\n\n● Created Node.js API endpoints to dynamically build SQL queries to supply D3.js chart data, visualising mobile data pertaining to device type, network type, time interval, status codes, region, and apps.\n\n● Deployed Redis caching layer to decrease page load-time due to costly SQL queries, cutting load times from >20 seconds to <1 second for clients with ~100gb of data.\n\n● Improved internal response time to key customer events through a Jenkins-monitored email report system with a Python script pulling data from MongoDB, PostgreSQL, and Amazon S3, saving the company ~$20,000 yearly."
  },
  {
    id: 12,
    links: [],
    urlName: SubMenuItemsEnum.SERVICES,
    displayName: 'Web\n&\nConsulting',
    bannerImgUrl: '../assets/img/services.png',
    year: null,
    scope: null, 
    technologies: null,
    description: ""
  }
];

//TODO enumerate all identifying content names
//export const PROJECT_NAME_ENUMS 
