export const profile = {
  name: 'Shankar Gupta',
  firstName: 'Shankar',
  lastName: 'Gupta',
  role: 'Senior Full-Stack Developer',
  tagline:
    'I engineer scalable, high-performance web applications end to end — spanning React frontends, Spring Boot microservices, and cloud infrastructure.',
  email: 'shankar060499@gmail.com',
  phone: '+91-7042778720',
  phoneDisplay: '+91 70427 78720',
  linkedin: 'https://www.linkedin.com/in/shankar-gupta-29071713a',
  github: 'https://github.com/shankar7042',
}

export const stats = [
  { value: '6+', label: 'Years of experience' },
  { value: '60%', label: 'Faster frontend load times' },
  { value: '45%', label: 'Lower backend response times' },
  { value: '40%', label: 'Smaller bundle payloads' },
]

export const summary = [
  'Senior Full-Stack Developer with 6+ years of experience engineering scalable, high-performance web applications using ReactJS, NextJS, Java, Spring Boot, Node.js, and modern cloud technologies.',
  'Demonstrated success in Agile environments, spearheading full-stack solutions across frontend, backend, and DevOps that improved performance, scalability, and reliability.',
  'Proven ability to lead teams, mentor developers, and collaborate with cross-functional stakeholders to deliver measurable business outcomes — including a 30% reduction in escalation incidents while directing a team of four developers.',
]

export type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Zustand',
      'TanStack Query',
      'SWR',
      'React Router',
      'Angular',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Ag-Grid',
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'GraphQL', 'Node.js', 'Express.js', 'Python'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'DevOps & Tools',
    icon: 'cloud',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
  },
  {
    title: 'Testing',
    icon: 'flask',
    skills: ['Jest', 'Cypress', 'Postman'],
  },
  {
    title: 'Practices',
    icon: 'sparkles',
    skills: ['Agile', 'Scrum', 'TDD', 'Figma', 'DSA'],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Wipro Ltd',
    role: 'Senior Software Engineer',
    period: 'Jun 2026 – Present',
    current: true,
    highlights: [
      'Developing enterprise-grade full-stack applications using Java, Spring Boot, ReactJS, and modern web technologies.',
      'Designing scalable frontend architectures and reusable UI components for high-performance applications.',
      'Building and enhancing backend REST and GraphQL APIs in microservices to support business-critical workflows.',
      'Collaborating with product owners, QA teams, and stakeholders in Agile environments for timely feature delivery.',
      'Contributing to application performance optimization, bug resolution, code reviews, and production support.',
    ],
  },
  {
    company: 'Infosys Ltd',
    role: 'Full-Stack Developer',
    period: 'Sep 2019 – Apr 2026',
    highlights: [
      'Directed a team of 4 developers, ensuring timely delivery of full-stack applications and reducing escalation incidents by 30%.',
      'Engineered reusable UI components with ReactJS, NextJS, and Tailwind CSS, enhancing user experience and accelerating load times by 60%.',
      'Developed and scaled Spring Boot microservices and GraphQL/REST APIs, lowering average response times by 45% and supporting thousands of daily requests.',
      'Optimized application scalability with lazy loading, code splitting, and refactoring, reducing bundle size by 40%.',
      'Automated CI/CD pipelines and integrated test frameworks (Jest, Cypress), cutting release cycle time by 25% and minimizing production defects.',
      'Partnered with product owners, QA, and business stakeholders to design solutions that improved customer satisfaction scores by 15%.',
      'Mentored junior developers, driving adoption of clean code practices and reducing code review defects by 20%.',
      'Owned the complete feature lifecycle, from requirement analysis to architecture design, implementation, and post-deployment support.',
      'Refactored legacy components, decreasing maintenance effort and enabling faster enhancements.',
      'Delivered internal tools and client-facing applications using ReactJS, JavaScript, and Java microservices.',
      'Resolved bugs and performance bottlenecks, reducing incident reports by 25%.',
      'Collaborated in Agile teams, participating in sprints and retrospectives to consistently meet sprint commitments.',
    ],
  },
]

export const education = {
  school: 'Keshav Mahavidyalaya, Delhi University',
  degree: 'B.Sc. (Computer Science)',
  period: 'Graduated July 2019',
}

export const certifications = [
  'Infosys Certified React Professional',
  'Infosys Certified Java Programmer',
  'Infosys Certified NodeJS Professional',
  'Infosys Certified JavaScript Programmer',
  'Infosys Certified Python Programmer',
  'Infosys Certified Spring Boot Developer',
]

export const awards = [
  'Recognized for delivering Walmart project solutions ahead of schedule and exceeding benchmarks.',
  'Commended for driving front-end architecture optimization and problem-solving excellence.',
]
