import type { JobDescriptionType } from './types';

export const experienceList: JobDescriptionType[] = [
  {
    name: 'Chunghwa Telecom',
    jobTitle: 'Senior Frontend developer',
    location: 'Taipei City, TW',
    date: {
      from: 'September 2022',
      to: 'Present',
    },
    descList: [
      'Created Media Module in Content management system',
      'Customized digital signage layout module using vanilla js',
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
      'Sync public chat room and private chat room data',
      'Developed common module ex: contact group, reporting',
      'Customized count down force logout module by user setting',
    ],
  },
  {
    name: 'Sinopac Security',
    jobTitle: 'Senior Software Engineer',
    location: 'Taipei City, TW',
    date: {
      from: 'April 2021',
      to: 'August 2021',
    },
    descList: [
      'Build inviteCode and activityCode interface to show information visualization',
      'Build multiProcessor deal with webSocket for sub-brokerage api',
    ],
  },
  {
    name: 'Anue',
    jobTitle: 'Frontend developer',
    location: 'Taipei City, TW',
    date: {
      from: 'March 2021',
      to: 'March 2020',
    },
    descList: [
      'Created shared modules using context pattern and wrote a unit test',
      'For the specific view need to realtime updated, design a pattern to reduce call api frequency',
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
      'Built a content management system chatbot for news updates',
      'Designed a News content management system for reporters to upload their press releases',
      'Designed a new website using Progressive Web App for testing',
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
      'Built a Inventory Management System for operators',
      'Designed a customer reports interface for specific customers',
    ],
  },
];
