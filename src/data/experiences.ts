import { Experiences } from '@/types';

export const experiences: Experiences = {
  'kanazawa-hokuryo-high-school': {
    type: 'education',
    projects: {},
  },
  'human-academy-kyoto-campus': {
    type: 'education',
    projects: {},
  },
  'system-engineering-service-company': {
    type: 'work',
    projects: {
      'workflow-institution-app-test': {
        skills: {
          os: ['Android', 'Windows 10'],
          business_tools: ['Excel', 'Google Chat'],
        },
      },
      'financial-institution-tool-test': {
        skills: {
          os: ['Windows 10'],
          business_tools: ['Excel', 'Google Chat'],
        },
      },
      'web-ad-technical-support': {
        skills: {
          os: ['Windows 10'],
          languages: ['JavaScript', 'Python3', 'SQL'],
          backend: ['Node.js', 'Google Apps Script', 'Slack API', 'Google Drive API'],
          frontend: ['jQuery'],
          databases: ['BigQuery'],
          infrastructure: ['Cloud Functions', 'Cloud Storage'],
          dev_tools: ['Git', 'GitHub', 'TROCCO'],
          analytics: ['Google Tag Manager', 'Google Analytics'],
          business_tools: ['Slack', 'Chatwork'],
        },
      },
      'ai-sales-bot-development': {
        skills: {
          os: ['macOS'],
          languages: ['TypeScript', 'Python3', 'SQL'],
          backend: ['Node.js', 'Express.js', 'FastAPI', 'Bolt for JavaScript', 'Google Drive API'],
          databases: ['MySQL', 'BigQuery'],
          infrastructure: ['Amazon ECS', 'Amazon S3', 'Amazon CloudWatch', 'AWS CDK'],
          dev_tools: ['Git', 'GitHub', 'GitHub Actions', 'GitHub Copilot', 'Docker', 'Datadog'],
          business_tools: ['Slack', 'Notion', 'Miro'],
        },
      },
    },
  },
  'tokyo-online-university': {
    type: 'education',
    projects: {},
  },
  'national-taiwan-normal-university': {
    type: 'education',
    projects: {},
  },
  'website-development-company': {
    type: 'work',
    projects: {
      'website-development-and-maintenance': {
        skills: {
          os: ['Windows 11'],
          languages: ['HTML5', 'CSS3', 'PHP'],
          frontend: ['WordPress'],
          dev_tools: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Devin AI'],
          ai: ['Devin'],
          business_tools: ['Slack', 'Notion', 'Figma'],
        },
      },
    },
  },
  'sler-company': {
    type: 'work',
    projects: {
      'master-data-management-system-renewal': {
        skills: {
          os: ['Windows 11'],
          languages: ['JavaScript'],
          dev_tools: ['Git', 'GitHub', 'Stibo Systems'],
          business_tools: ['Jira', 'Excel', 'Teams'],
        },
      },
    },
  },
};
