import { Experiences } from '@/types';

export const experiences: Experiences = {
  educations: {
    'kanazawa-hokuryo-high-school': {
      skills: {},
    },
    'human-academy-kyoto-campus': {
      skills: {
        languages: ['C', 'C++', 'C#'],
      },
    },
    'tokyo-online-university': {
      skills: {
        languages: ['Java', 'Python3'],
      },
    },
    'national-taiwan-normal-university': {
      skills: {},
    },
  },
  works: {
    'system-engineering-service-company': {
      skills: {
        os: ['Android', 'Windows 10', 'macOS'],
        languages: ['JavaScript', 'TypeScript', 'Python3', 'SQL'],
        backend: ['Node.js', 'Google Apps Script', 'Express.js', 'FastAPI', 'Slack API', 'Bolt for JavaScript', 'Google Drive API'],
        frontend: ['jQuery'],
        databases: ['MySQL', 'BigQuery'],
        infrastructure: ['Amazon ECS', 'Amazon S3', 'Amazon CloudWatch', 'AWS CDK', 'Cloud Functions', 'Cloud Storage'],
        dev_tools: ['Git', 'GitHub', 'GitHub Actions', 'GitHub Copilot', 'Docker', 'Datadog', 'TROCCO'],
        analytics: ['Google Tag Manager', 'Google Analytics'],
        business_tools: ['Google Chat', 'Chatwork', 'Slack', 'Notion', 'Miro'],
      },
    },
    'website-development-company': {
      skills: {
        os: ['Windows 11'],
        languages: ['HTML5', 'CSS3', 'PHP'],
        frontend: ['WordPress'],
        dev_tools: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Devin AI'],
        ai: ['Devin'],
        analytics: ['Google Tag Manager'],
        business_tools: ['Slack', 'Notion', 'Figma'],
      },
    },
    'sler-company': {
      skills: {
        os: ['Windows 11'],
        languages: ['JavaScript'],
        dev_tools: ['Git', 'GitHub', 'Stibo Systems'],
        business_tools: ['Jira', 'Teams'],
      },
    },
  },
};
