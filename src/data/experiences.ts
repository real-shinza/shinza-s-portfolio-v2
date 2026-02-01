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
      'truck-driver-workflow-app-test': {
        skills: {
          os: ['Android', 'Windows 10'],
          workflow: ['Excel', 'Google Chat'],
        },
      },
      'financial-institution-tool-test': {
        skills: {
          os: ['Windows 10'],
          workflow: ['Excel', 'Google Chat'],
        },
      },
      'web-ad-technical-support': {
        skills: {
          os: ['Windows 10'],
          languages: ['JavaScript', 'Python3', 'SQL'],
          runtime: ['Node.js', 'Google Apps Script'],
          libraries: ['jQuery'],
          api_sdk: ['Slack API', 'Google Drive API'],
          databases: ['BigQuery'],
          infrastructure: ['Cloud Functions', 'Cloud Storage'],
          tools: ['Git', 'GitHub', 'TROCCO'],
          analytics: ['Google Tag Manager', 'Google Analytics'],
          workflow: ['Slack', 'Chatwork'],
        },
      },
      'ai-sales-bot-development': {
        skills: {
          os: ['macOS'],
          languages: ['TypeScript', 'Python3', 'SQL'],
          runtime: ['Node.js'],
          frameworks: ['Express.js', 'FastAPI', 'Bolt for JavaScript'],
          api_sdk: ['Google Drive API'],
          databases: ['MySQL', 'BigQuery'],
          infrastructure: ['Amazon EC2', 'Amazon ECS', 'Amazon S3', 'Amazon EventBridge', 'Amazon CloudWatch', 'AWS WAF', 'AWS CDK'],
          tools: ['Git', 'GitHub', 'GitHub Actions', 'GitHub Copilot', 'Docker', 'Datadog'],
          workflow: ['Slack', 'Notion', 'Miro'],
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
          frameworks: ['WordPress'],
          tools: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Devin AI'],
          workflow: ['Slack', 'Notion', 'Figma'],
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
          tools: ['Git', 'GitHub', 'Stibo Systems'],
          workflow: ['Jira', 'Excel', 'Teams'],
        },
      },
    },
  },
};
