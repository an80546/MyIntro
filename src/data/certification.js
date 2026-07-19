import { LANGUAGES, translateField } from '../i18n/index.js'

const certificationData = [
  {
    id: 1,
    title: {
      [LANGUAGES.ZH]: 'CRM 顧客關係管理商品分析師',
      [LANGUAGES.EN]: 'CRM Customer Relationship Management Product Analyst',
    },
    level: {
      [LANGUAGES.ZH]: '熟悉',
      [LANGUAGES.EN]: 'Familiar',
    },
    description: {
      [LANGUAGES.ZH]:
        '具備顧客關係管理、商品分析、消費者行為與市場分析的基礎應用能力。',
      [LANGUAGES.EN]:
        'Demonstrates foundational applied knowledge in customer relationship management, product analysis, consumer behavior, and market analysis.',
    },
    tools: {
      [LANGUAGES.ZH]: ['CRM', '顧客關係管理', '商品分析', '消費者行為'],
      [LANGUAGES.EN]: [
        'CRM',
        'Customer Relationship Management',
        'Product Analysis',
        'Consumer Behavior',
      ],
    },
  },
  {
    id: 2,
    title: {
      [LANGUAGES.ZH]: 'IT Specialist - Databases',
      [LANGUAGES.EN]: 'IT Specialist - Databases',
    },
    level: {
      [LANGUAGES.ZH]: '熟悉',
      [LANGUAGES.EN]: 'Familiar',
    },
    description: {
      [LANGUAGES.ZH]:
        '具備資料庫核心概念、資料表設計、資料操作與資料庫管理的基礎能力。',
      [LANGUAGES.EN]:
        'Demonstrates foundational ability in database concepts, table design, data operations, and database administration.',
    },
    tools: ['Database Concepts', 'SQL', 'Data Manipulation', 'Database Administration'],
  },
  {
    id: 3,
    title: {
      [LANGUAGES.ZH]: 'MTA: Software Development Fundamentals',
      [LANGUAGES.EN]: 'MTA: Software Development Fundamentals',
    },
    level: {
      [LANGUAGES.ZH]: '熟悉',
      [LANGUAGES.EN]: 'Familiar',
    },
    description: {
      [LANGUAGES.ZH]:
        '具備核心程式設計、物件導向、軟體開發流程、Web 應用與資料庫基礎概念。',
      [LANGUAGES.EN]:
        'Demonstrates foundational understanding of programming, object-oriented design, software development processes, web applications, and databases.',
    },
    tools: ['Programming Fundamentals', 'OOP', 'Web Applications', 'Databases'],
  },
  {
    id: 4,
    title: {
      [LANGUAGES.ZH]: 'IT Specialist - Networking',
      [LANGUAGES.EN]: 'IT Specialist - Networking',
    },
    level: {
      [LANGUAGES.ZH]: '熟悉',
      [LANGUAGES.EN]: 'Familiar',
    },
    description: {
      [LANGUAGES.ZH]:
        '具備基礎網路架構、TCP/IP、網路服務、網路拓樸，以及有線與無線網路環境下的故障排除概念。',
      [LANGUAGES.EN]:
        'Demonstrates foundational knowledge of network architecture, TCP/IP, network services, topologies, and troubleshooting across wired and wireless environments.',
    },
    tools: [
      'TCP/IP',
      'Networking Services',
      'Network Topologies',
      'Wired/Wireless Networking',
      'Troubleshooting',
    ],
  },
]

function translateCertification(certification, language) {
  return {
    ...certification,
    title: translateField(certification, 'title', language),
    level: translateField(certification, 'level', language),
    description: translateField(certification, 'description', language),
    tools: translateField(certification, 'tools', language),
  }
}

export function getCertifications(language = LANGUAGES.ZH) {
  return certificationData.map((certification) => translateCertification(certification, language))
}

export const certifications = getCertifications()
