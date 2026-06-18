import { Experiences } from '@/types';

export const experiences: Experiences = {
  educations: {
    'kanazawa-hokuryo-high-school': {
      skills: {},
    },
    'human-academy-kyoto-campus': {
      skills: {
        os: ['Windows 10'],
        languages: ['C', 'C++', 'C#'],
        game_engines: ['Unity'],
        editors: ['Visual Studio 2019'],
      },
    },
    'tokyo-online-university': {
      skills: {
        os: ['Windows 10', 'Windows 11', 'AlmaLinux'],
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
        os: ['Windows 10', 'CentOS', 'Android', 'macOS'],
        languages: ['Java', 'JavaScript', 'Google Apps Script', 'TypeScript', 'Python3', 'SQL'],
        backend: ['Node.js', 'Express.js', 'FastAPI', 'Slack API', 'Bolt for JavaScript'],
        frontend: ['jQuery'],
        databases: ['MySQL', 'BigQuery'],
        infrastructure: ['Amazon ECS', 'Amazon S3', 'Amazon CloudWatch', 'AWS CDK', 'Cloud Functions', 'Cloud Storage', 'Docker', 'Datadog', 'TROCCO'],
        version_control: ['Git', 'GitHub'],
        ci_cd: ['GitHub Actions'],
        testing: ['Jest'],
        ai: ['GitHub Copilot'],
        editors: ['Eclipse', 'Visual Studio Code', 'PyCharm'],
        analytics: ['Google Tag Manager', 'Google Analytics'],
        communication: ['Google Chat', 'Chatwork', 'Slack'],
        productivity: ['Google Sheets', 'Notion', 'Miro'],
      },
    },
    'website-development-company': {
      skills: {
        os: ['Windows 11'],
        languages: ['HTML5', 'CSS3', 'PHP'],
        frontend: ['WordPress'],
        infrastructure: ['Docker'],
        version_control: ['Git', 'GitHub'],
        ci_cd: ['GitHub Actions'],
        ai: ['Devin'],
        editors: ['Visual Studio Code'],
        analytics: ['Google Tag Manager'],
        communication: ['Slack'],
        productivity: ['Notion', 'Figma'],
      },
    },
    'sler-company': {
      skills: {
        os: ['Windows 11'],
        languages: ['JavaScript'],
        backend: ['Stibo Systems'],
        version_control: ['Git', 'GitHub'],
        editors: ['Visual Studio Code'],
        communication: ['Teams', 'Slack'],
        productivity: ['Jira'],
      },
    },
    'advertising-agency': {
      skills: {
        os: ['macOS'],
        languages: ['TypeScript', 'Python3', 'SQL'],
        backend: ['Node.js', 'FastAPI', 'Slack API'],
        frontend: ['React', 'Next.js', 'HeroUI', 'assistant-ui', 'Chart.js'],
        databases: ['BigQuery', 'Firestore'],
        infrastructure: ['Cloud Run', 'Cloud Storage', 'Docker', 'Terraform'],
        version_control: ['Git', 'GitHub'],
        ci_cd: ['GitHub Actions'],
        ai: ['ChatGPT', 'Codex', 'Claude', 'Claude Code', 'Gemini'],
        editors: ['Visual Studio Code'],
        analytics: ['Google Tag Manager', 'Google Analytics'],
        communication: ['Slack'],
        productivity: ['Notion', 'Jira'],
      }
    },
  },
};
