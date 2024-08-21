import type { JobDescriptionType } from './types';

export const experienceList: JobDescriptionType[] = [
  {
    name: 'Chunghwa Telecom',
    jobTitle: 'Senior Frontend Developer',
    location: 'Taipei City, TW',
    date: {
      from: 'September 2022',
      to: 'March 2024',
    },
    descList: [
      'We implemented new features in our electric vehicle, such as a login module and a tree view selection module, which makes it easier to choose an organized structure.',
      'Created Media Module, which upload interface includes a preview of our video and image files, and Created a customized video player for the user.',
      'Using React Native to build weather and info of app to provide citizens.',
      'Integrating storybook and unit test made the UI designer and frontend developer check the codebase robust and find bugs easier, with coverage from 0% to 10% in the codebase.',
      'Customized digital signage layout module using vanilla JavaScript.',
      "In charge of the department's primary reviewer to improve code productivity and code quality.",
      'Caching unveils data to increase user experience to avoid response time causing issues.',
    ],
  },
  {
    name: 'imbee',
    jobTitle: 'Frontend Developer',
    location: 'Hong Kong, HK, REMOTE',
    date: {
      from: 'November 2021',
      to: 'September 2022',
    },
    descList: [
      'Sync chat content(e.g., text, image, video) between the public chat and the private chat.',
      'Developed a common ui module.',
      'Reporting services that provide data collection as visual diagrams to clients.',
      'Customized count-down force logout module by the user setting.',
    ],
  },
  {
    name: 'Sinopac Security',
    jobTitle: 'Senior Frontend Engineer',
    location: 'Taipei City, TW',
    date: {
      from: 'April 2021',
      to: 'August 2021',
    },
    descList: [
      'Build inviteCode and activityCode interface to show information visualization.',
      'Build multiProcessor deal with webSocket for sub-brokerage api.',
    ],
  },
  {
    name: 'Anue',
    jobTitle: 'Frontend Developer',
    location: 'Taipei City, TW',
    date: {
      from: 'March 2020',
      to: 'March 2021',
    },
    descList: [
      'Created shared modules using compound pattern and wrote a unit test.',
      'For the specific view need to realtime updated, design a pattern to reduce 10% call api frequency.',
      'Refactor code base of landing page and build campaign page.',
    ],
  },
  {
    name: 'NextDigital',
    jobTitle: 'Software Engineer',
    location: 'Taipei City, TW',
    date: {
      from: 'August 2017',
      to: 'February 2020',
    },
    descList: [
      'Built a content management system chatbot for news updates.',
      'Designed a News content management system for reporters to upload their press releases.',
      'Designed a new website using Progressive Web App for testing.',
    ],
  },
  {
    name: 'Pegatron',
    jobTitle: 'Software Engineer',
    location: 'Taipei City, TW',
    date: {
      from: 'December 2015',
      to: 'May 2017',
    },
    descList: [
      'Built a Inventory Management System for operators.',
      'Designed a customer reports interface for specific customers.',
    ],
  },
];
