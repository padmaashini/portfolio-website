const data = [
  {
    key: 0,
    position: 'Software Engineer, Intern',
    name: 'Census',
    image: '/census-logo.png',
    location: 'San Francisco, California',
    points: [
      'Developed new feature to trigger reverse ETL syncs in Census after events successfully completed in Fivetran, using Ruby on Rails, webhooks, PostgreSQL, and Vue.js, and helped improve external partnerships ',
      'Implemented Bitbucket support to enable customers to import in their repositories for integration with dbt Core and Git-backed Census configurations ',
      'Developed a history page displaying user actions that happened through the UI or Git (for Git-backed resources), using Vue.js, TypeScript, Pug template, and Buefy, boosting audit efficiencies for over 70 organizations ',
    ],
  },
  {
    key: 1,
    position: 'Software Engineer, Intern',
    name: 'Canvass AI',
    image: '/canvass-logo.png',
    location: 'Toronto, Ontario',
    points: [
      'Developed REST endpoints in Python FastAPI microservices to allow customers to visualize data in 3D formats',
      'Developed new functions for splitting training-testing data across various microservices in the ML pipeline',
      'Improved Pytest coverage by 27% for data transformers and extractors used in curation, training, and validation',
      'Automated release notes from GitHub to Confluence by implementing new workflows and cron jobs in CircleCI, reducing release process times by 60%',
    ],
  },
  {
    key: 2,
    position: 'Software Engineer, Intern',
    name: 'MedMe Health',
    image: '/medme-logo.png',
    location: 'Toronto, Ontario',
    points: [
      'Developed eight new patient intake flows for over 1300 pharmacy branches to allow waitlist and direct booking for flu and COVID-related appointments using React and GraphQL; increased module availability by 40+%',
      'Refactored API endpoints in Java (Spring Boot) to support new federal requirements for COVID vaccines and optimize reminders for customers',
      'Implemented SQL scripts on a PostgreSQL database to perform data analysis and update table schemas across various client platforms',
      'Enabled support for multiple languages in the patient and pharmacist-side platforms using the i18next (internationalization) library',
    ],
  },
  {
    key: 3,
    position: 'Full Stack Developer, Intern',
    name: 'Remitbee',
    image: '/remitbee-logo.jpeg',
    location: 'Mississauga, Ontario',
    points: [
      'Architected and implemented new user onboarding and verification to double potential customer groups in the Next.js framework using Redux and GraphQL',
      'Built a multi-threaded web scraper to fetch results from 22 websites within 30 seconds using Selenium',
      'Developed REST APIs to allow users to retrieve web-scraped data stored in MySQL with Python (Flask)',
      'Implemented unit tests using Jest and Enzyme to increase automated testing and improve code quality',
    ],
  },
  {
    key: 4,
    position: 'Full Stack Developer, Intern (Part-time)',
    name: 'University of Waterloo',
    image: '/uw-logo.jpg',
    location: 'Waterloo, Ontario',
    points: [
      'Improved user experience by implementing autofill for forms',
      'Redesigned 21% of Next.js components using hard-coded data to use API endpoints and reflect live data',
    ],
  },
  {
    key: 5,
    position: 'UX/UI Designer and Developer, Intern',
    name: 'Remitbee',
    image: '/remitbee-logo.jpeg',
    location: 'Mississauga, Ontario',
    points: [
      'Researched user requirements and built wireframes for marketing, finance, and risk and compliance dashboards using Adobe XD, kick-starting the product lifecycle',
      'Built marketing dashboard prototype for monitoring over 20 metrics using React.js and Google Analytics API that helped target marketing initiatives',
      'Conducted user and market research, coordinated with external relations, and created personas to prioritize product planning',
    ],
  },

];

export default data;
