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
    description: "● Designed AngularJS front-end for users to upload photos to make their own photo-mosaic images, communicated with a Node.js and Express server with a Mongo database.\n\n● Refactored previous iteration into mobile-optimized version of tinyicon.co using HTML5 Canvas and Backbone.\n\n● Improved load time by 65% by sending pre-calculated average RGB values in static JSON files."
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
    description: "This script-generated video is an experiment in 3D video coding, performed with Python, Blender, and the Blender-Python \”bpy\” module. Nothing too crazy. Just having fun here."
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
    description: "● Produced video content for Blackdove's motion art platform and product launch at Miami Art Basel 2014.\n\n● Wrote Python software for re-editing mp4s as photo-mosaic videos using ffmpeg and Python's PIL module."
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
    description: "These are Python scripts for parsing infoblox DHCP log files, saving DHCPACK events into a bi-relational MySQL database, searching that database dynamically using a number of search parameter options, and automatically updating Infoblox DHCP lease expiration dates given the user's last DHCPACK event. In 2014, these scripts allowed Washington University In St Louis’s System Administrators to automatically extend DHCP leases three months from a given users most recent network sign-in, as opposed to the default setting, three months from the DHCP lease publication. As a result, thousands of hours were saved across tens of thousands of students who would have otherwise needlessly re-authenticated through the Infoblox captive portal for years to come."
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
    description: "These are Python scripts I wrote for Washington University's system administrators and security analysts. In 2014, the university’s Network Operating Center was overseeing a shift from Meru to Cisco wireless routing equipment. During this transition, though, they found themselves writing a mess of repetitive commands across the Cisco and Meru API’s for performance monitoring. To ease this pain, I wrote these scripts to automate the process of session lookup across networks. After completion, instead of repeatedly signing in out of convoluted 3rd-party CLI’s everytime we wanted to perform a network check, we could perform dynamic user lookups for either Meru or Cisco systems all from one command-line system. Used over the course of a year as we completed the transition to Cisco equipment, these scripts saved the university an estimated $25,000 in labor time."
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
    description: `<div>This is a write-up I did for a C++ facial recognition project for my computer vision course. The source code for this project can be found here:
        <a href="https://github.com/andrewhannebrink/Facial-Recognition" target="_blank">github.com/andrewhannebrink/Facial-Recognition</a>
  <h3>Testing recognigtion with cropped class images</h3><p> I computed these eigenfaces with the command: "$ ./main --eigenfaces 10 25 25 neutral/list.txt neutral.face" to write the first ten eigenfaces to neutral.face. I ran this command with my binary file in the "faces" directory. The output was 10 eigenface tga files and an average face tga file shown below (converted to gifs).</p>
  <img src="../../assets/img/face-recognition/average_face.gif"> </img>Average face
  Eigen faces
  <img src="../../assets/img/face-recognition/eigen_face_0.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_1.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_2.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_3.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_4.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_5.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_6.gif">  </img>
  <img src="../../assets/img/face-recognition/eigen_face_7.gif"> </img>
  <img src="../../assets/img/face-recognition/eigen_face_8.gif"> </img>
  <img src="../../assets/img/face-recognition/eigen_face_9.gif"> </img>
  <p> I then constructed a userbase from these images using "$ ./main --constructuserbase neutral.face neutral/list10.txt neutral.user," where list10.txt is a modified version of list.txt that only contains 10 image entries. This created the user file "neutral.user"</p>
  <p>My program performed best when using a higher threshold for the mse with a 10 face userbase. Most face mse's fell under 1200 with some as low as 300. It is important to note that all faces I tested in the interesting directory had significantly lower mse's than the mse for test.tga (the picture of the house), which is well over 3000.</p><p>Here are the photos I tested with a mse threshold of 500:</p>
  <img src="../../assets/img/face-recognition/24.gif"></img>Is a face, mse: 385.814
  <img src="../../assets/img/face-recognition/23.gif"></img>Is a face, mse: 289.163
  <img src="../../assets/img/face-recognition/22.gif"></img>Is not a face, mse: 683.683
  <img src="../../assets/img/face-recognition/21.gif"></img>Is not a face, mse: 913.998
  <img src="../../assets/img/face-recognition/20.gif"></img>Is a face, mse: 382.199
  <img src="../../assets/img/face-recognition/19.gif"></img>Is a face, mse:454.637
  <img src="../../assets/img/face-recognition/18.gif"></img>Is not a face, mse: 519.553
  <img src="../../assets/img/face-recognition/17.gif"></img>Is a face, mse: 322.44
  <img src="../../assets/img/face-recognition/16.gif"></img>Is not a face, mse: 565.273
  <img src="../../assets/img/face-recognition/15.gif"></img>Is not a face, mse: 1610.11
  <p>As I use more and more faces to comprise the userbase, my code recognizes more and more faces as faces. Below is my plot showing how many faces from interesting were recognized given the userbase size. Judging from the data, it appears that accuracy increases but suffers from the law of diminishing returns, characteristic of logarithmic curve. Since creating a large userbase is time and resource consuming, I would suggest not using too many eigenfaces when creating a database. That being said, it appears that too many eigenfaces never decreases the program's facial recognition performance.</p>
  <img src="../../assets/img/face-recognition/chart.png"><img>
  <p> Three faces were never recognized at any size userbase. These were 22.tga, 21.tga, and 15.tga, shown below in gif format. These seem like reasonable mistakes seeing as two of the three are wearing glasses, one has his head very tilt in dark lighting, and the other is making a crooked funny face. These characteristics were uncommon in the original faces used to compute the userbase." </p>
  <img src="../../assets/img/face-recognition/22.gif"></img><img src="../../assets/img/face-recognition/21.gif"></img><img src="../../assets/img/face-recognition/15.gif"></img>

<h3>Cropping and Finding Faces</h3>
<p> *Note I use a 24 face userbase in this section</p>
 <p> I ran this command to rop the input image group/test_single.tga: "$ ./main --findface group/test_single.tga neutral.face 0.35 0.55 0.05 crop 1 cropped_face.tga." The input and output images are below. </p>
 <img src="../../assets/img/face-recognition/test_single.gif"></img>Full image
 <img src="../../assets/img/face-recognition/cropped_face.gif"></img>Cropped image
 <p> I did, however, have less success with pictures of myself, while most parameters scale limits between .5 to .7 yielded my hat, I had trouble consistently finding my face with any parameters. That being said, most results did fall on my face, leading me to believe that the cropping adjustments I made in my code throw off the true facial detection slightly. My results are below </p>
 <img src="../../assets/img/face-recognition/me1.gif"></img>
 <img src="../../assets/img/face-recognition/me1_cropped_face.gif"></img>
 <img src="../../assets/img/face-recognition/me2.gif"></img>
 <img src="../../assets/img/face-recognition/me2_cropped_face.gif"></img>
 This is a good example of one of my crops with higher parameters. I used this command "$./main --findface me2.tga neutral.face 0.6 0.7 0.05 crop 1 me2_cropped_face.tga."
 <p> For my group marked photos, I had varying success, here are my results from running the following 2 commands: "$ ./main --findface group/group04.tga neutral.face 0.3 0.6 0.05 mark 4 marked_faces1.tga" and "$ ./main --findface group/group13.tga neutral.face 0.3 0.6 0.05 mark 4 marked_faces2.tga."
 </p>
 <img src="../../assets/img/face-recognition/marked_faces1.gif"></img>
 <img src="../../assets/img/face-recognition/marked_faces2.gif"></img>

 <p>The second image is a good example of how my code wants to work with the exception of my overlapping function. Since the overlapping function doesnt take into account if an overlapping crop frame has a smaller mse than the existing crop frame, it naively keeps the current best. So, we see two frames surrounding the left man's face, since the better frames overlapping the two frames were discarded when catalogging the lowest mse portions of the photo.</p>
 <p> For my personal photo marking exercise I used a photo from the web. Again we can see behavior similar to the second image above, where multiple frames hover towards one person without overlapping. Again, this is because of my overlapping function's disfunctionality.</p>
 <img src="../../assets/img/face-recognition/grouprandom.gif"></img>
 <img src="../../assets/img/face-recognition/marked_faces3.gif"></img>
 <h4> Questions</h4>
 <p> You can see all of my min_scale, max_scale, and step parameters in the commands above. For pictures of just one person, particularly myself, I had to play with a wide variety of parameters. I mostly did this by guess and checking which image scale would scale the image to fit a face comfortably in the predetermined cropping box. However, for the group photos, since most of the images were arrangements of people all a certain distance away from the camera in similarly proportioned frames, I got away with using the 0.3 and 0.6 min and max scale parameters suggested on the project page. </p>
 <p> This was by far the hardest part of the lab for me. While my overlapping handling was faulty, I also returned a fair number of false positives. These occur in places with high contrast edges, which is trait common among faces. For instance, if you blur your eyes a little bit, the box on the man's chest wearing the northface in the first picture almost resembles a face, with his necklace as an eye. This is obviously stretch. What's more concerning is the number of false negatives, where people's faces don't even come close to being in a box. It is hard for me to fully say why some of these false positives trump over the overlooked faces in the lowness of their mse's.</p>

 <h3>Verify Face</h3>
<p> *Note I use a 24 face userbase in this section</p>
 <p> Here are my results when verifying user's faces from the neutral group to faces in the interesting group. I tested five neutral members against a picture of themselves from the interesting group, and a picture of someone else in the interesting group. The standard command I ran was "$ ./main --verifyface interesting/02.tga neutral.user neutral/01 neutral.face 60000.0." </p>
<img src="../../assets/img/face-recognition/n01.gif"></img><img src="../../assets/img/face-recognition/01.gif"></img><img src="../../assets/img/face-recognition/02.gif"></img>
<p>The first two images above are verified as the same person with an mse of 12974.3. The first and last images are verified as different people with an mse of 117704. </p>
<img src="../../assets/img/face-recognition/n02.gif"></img><img src="../../assets/img/face-recognition/02.gif"></img><img src="../../assets/img/face-recognition/01.gif"></img>
<p>The first two images are a false negative with an mse of 75339.9, which is not terribly far from the threshold. This is probably because of the man's significant head rotation in the interesting group. The first and last photos are also negative, but this is correct.Unsurprisingly, they have a much greater mse of 137719.</p>
<img src="../../assets/img/face-recognition/n03.gif"></img><img src="../../assets/img/face-recognition/03.gif"></img><img src="../../assets/img/face-recognition/04.gif"></img>
<p>The first two images are correctly verified as the same person, with an mse of 17413.3. The first and last two images are incorrectly identified as the same person with an mse of 53754.4. As expected, this false positive mse lingers near our threshold of 60,000. The dark lighting and similar facial features such as glasses may also account for this false positive.</p>
<img src="../../assets/img/face-recognition/n05.gif"></img><img src="../../assets/img/face-recognition/05.gif"></img><img src="../../assets/img/face-recognition/06.gif"></img>
<p>Here we get that the first two images are the same person with an mse of 45571.8. Also, we get that the first and last images are not a picture of the same person with an mse of 144639. Again, the parameters supplied by the project page have done me well.</p> 
<p> I tried a number of mse thresholds ranging from 30,000 to 120,000. I found that anything over 100,000 was too generous verifying identities, returning many false positives, and anything below 40,000 was too strict. Ultimately, I found that the course webpage's recommended threshold of 60,000 was quite ideal for this sectioni. </p>
<p> Given these 8 recorded trials, the false negative rate was 1/4. Judging from intuition though, I feel the rate was even lower among other sets of images I tried. Furthermore, with the mse threshold still at 60,000 for these 8 trials, the false positive rate was also 1/4.</p>
</div>
  `
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
