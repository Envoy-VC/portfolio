/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Envoy_',
  title: "Hi all, I'm Vedant",
  subTitle: emoji(
    'A passionate Learner 🚀 and an Open Source Contributer'
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Envoy-VC',
  linkedin: 'https://www.linkedin.com/in/vedant-chainani/',
  gmail: 'envoy1084@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  // medium: 'https://medium.com/@saadpasta',
  stackoverflow: 'https://stackoverflow.com/users/15023973/envoy1084',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY LEARNER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Create content for you all to use'
    ),
    emoji('⚡ Learning JavaScript now'),
    emoji(
      '⚡ Planning to master Blockchain in Future'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2017 - April 2019',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Stanford University',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', //Insert stack or technology you have experience in
      progressPercentage: '40%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Python',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Facebook',
      companylogo: require('./assets/images/facebookLogo.png'),
      date: 'June 2018 – Present',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Quora',
      companylogo: require('./assets/images/quoraLogo.png'),
      date: 'May 2017 – May 2018',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Airbnb',
      companylogo: require('./assets/images/airbnbLogo.png'),
      date: 'Jan 2015 – Sep 2015',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Envoy-VC', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://nextu.se/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Python 101 for Data Science',
      subtitle:
        '',
      image: require('./assets/images/101.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://courses.cognitiveclass.ai/certificates/d9882fbd5fd140348ed09604595c84c8',
        },
      ],
    },
    {
      title: 'Software Engineering Virtual Experience',
      subtitle:
        "Throughout the virtual experience, i familiarize myself with JPMorgan Chase frameworks and applied my technical skills to a hypothetical request from the firm's trading floor to analyze and visualize data in a new way.",
      image: require('./assets/images/virtual.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_MvFALPp4jbydeNF6Z_completion_certificate.pdf',
        },
      ],
    },

    {
      title: 'Google Analytics for Beginners',
      subtitle: 'Google Analytics for Beginners shows new users how to create an account, implement tracking code, and set up data filters. ... The course will also demonstrate how to analyze basic Audience, Acquisition, and Behavior reports, and set up goals and campaign tracking.',
      image: require('./assets/images/google-analytics.webp'),
      footerLink: [
        { name: 'Certification', 
          url:
           'https://analytics.google.com/analytics/academy/certificate/sjAmh153QR2KcnIEFVj6nA' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://envoy1084.hashnode.dev/python-free-resources',
      title: 'Python Free Resources',
      description:
        'A curated List of Free Resources available in Python',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'Some of the best Podcasts in Programming Category',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/vedant-chainani/embed/episodes/Tantek-elikweb-standards--toolchains--and-the-decentralized-web-epqluj',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-7020084608',
  emailAddress: 'envoy1084@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'Envoy_1084', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
