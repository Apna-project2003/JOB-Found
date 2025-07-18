import company_icon from '../assets/employee-engagement.png'

export const JobCategories = [
  "Software Development",
  "Design",
  "Marketing",
  "Finance",
  "Customer Support",
  "Human Resources",
  "Data Science",
  "Project Management",
  "Sales",
  "Content Writing"
]
export const JobLocations = [
  "New York",
  "San Francisco",
  "Bangalore",
  "London",
  "Berlin",
  "Remote",
  "Toronto",
  "Sydney",
  "Dubai",
  "Tokyo"
]

// export const jobsData = [
//   {
//     _id: '1',
//     title: "Full Stack Developer",
//     location: "Dubai",
//     level: "Senior Level",
//     salary: 130000,
//     date: "2025-06-01",
//     category: "Programming",
//     companyId: {
//       _id: "c1",
//       name: "Slack",
//       email: "slack@demo.com",
       
//     },
//     description: `
//       <p>Join our team as a Full Stack Developer to build modern web applications.</p>
//       <ul>
//         <li>Work with React, Node.js, and MongoDB.</li>
//         <li>Design scalable architecture.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '2',
//     title: "Frontend Engineer",
//     location: "New York",
//     level: "Mid Level",
//     salary: 100000,
//     date: "2025-06-10",
//     category: "Design",
//     companyId: {
//       _id: "c2",
//       name: "Amazon",
//       email: "amazon@demo.com",
    
//     },
//     description: `
//       <p>We are looking for a skilled Frontend Engineer.</p>
//       <ul>
//         <li>Build responsive UIs with React and Tailwind CSS.</li>
//         <li>Work closely with backend teams.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '3',
//     title: "Backend Developer",
//     location: "Remote",
//     level: "Junior Level",
//     salary: 90000,
//     date: "2025-05-15",
//     category: "Programming",
//     companyId: {
//       _id: "c3",
//       name: "Google",
//       email: "google@demo.com",
    
//     },
//     description: `
//       <p>Help us improve our backend systems.</p>
//       <ul>
//         <li>Write scalable APIs with Node.js.</li>
//         <li>Maintain cloud infrastructure.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '4',
//     title: "UI/UX Designer",
//     location: "Seattle",
//     level: "Mid Level",
//     salary: 85000,
//     date: "2025-06-20",
//     category: "Design",
//     companyId: {
//       _id: "c4",
//       name: "Microsoft",
//       email: "microsoft@demo.com",
     
//     },
//     description: `
//       <p>Join our creative team as a UI/UX Designer.</p>
//       <ul>
//         <li>Design wireframes and user flows.</li>
//         <li>Conduct user testing and improve UX.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '5',
//     title: "DevOps Engineer",
//     location: "San Francisco",
//     level: "Senior Level",
//     salary: 120000,
//     date: "2025-06-05",
//     category: "Infrastructure",
//     companyId: {
//       _id: "c5",
//       name: "Adobe",
//       email: "adobe@demo.com",
      
//     },
//     description: `
//       <p>Ensure seamless deployments and system reliability.</p>
//       <ul>
//         <li>Manage CI/CD pipelines and cloud infrastructure.</li>
//         <li>Automate processes and monitor system health.</li>
//       </ul>
//     `
//   }
// ];

// export const jobsData = [
//   {
//     _id: '1',
//     title: "Full Stack Developer",
//     location: "Dubai",
//     level: "Senior Level",
//     salary: 130000,
//     date: "2025-06-01",
//     category: "Software Development",
//     companyId: {
//       _id: "c1",
//       name: "Slack",
//       email: "slack@demo.com",
//     },
//     description: `
//       <p>Join our team as a Full Stack Developer to build modern web applications.</p>
//       <ul>
//         <li>Work with React, Node.js, and MongoDB.</li>
//         <li>Design scalable architecture.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '2',
//     title: "Frontend Engineer",
//     location: "New York",
//     level: "Mid Level",
//     salary: 100000,
//     date: "2025-06-10",
//     category: "Design",
//     companyId: {
//       _id: "c2",
//       name: "Amazon",
//       email: "amazon@demo.com",
//     },
//     description: `
//       <p>We are looking for a skilled Frontend Engineer.</p>
//       <ul>
//         <li>Build responsive UIs with React and Tailwind CSS.</li>
//         <li>Work closely with backend teams.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '3',
//     title: "Backend Developer",
//     location: "Remote",
//     level: "Junior Level",
//     salary: 90000,
//     date: "2025-05-15",
//     category: "Software Development",
//     companyId: {
//       _id: "c3",
//       name: "Google",
//       email: "google@demo.com",
//     },
//     description: `
//       <p>Help us improve our backend systems.</p>
//       <ul>
//         <li>Write scalable APIs with Node.js.</li>
//         <li>Maintain cloud infrastructure.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '4',
//     title: "UI/UX Designer",
//     location: "Seattle",
//     level: "Mid Level",
//     salary: 85000,
//     date: "2025-06-20",
//     category: "Design",
//     companyId: {
//       _id: "c4",
//       name: "Microsoft",
//       email: "microsoft@demo.com",
//     },
//     description: `
//       <p>Join our creative team as a UI/UX Designer.</p>
//       <ul>
//         <li>Design wireframes and user flows.</li>
//         <li>Conduct user testing and improve UX.</li>
//       </ul>
//     `
//   },
//   {
//     _id: '5',
//     title: "DevOps Engineer",
//     location: "San Francisco",
//     level: "Senior Level",
//     salary: 120000,
//     date: "2025-06-05",
//     category: "Software Development",
//     companyId: {
//       _id: "c5",
//       name: "Adobe",
//       email: "adobe@demo.com",
//     },
//     description: `
//       <p>Ensure seamless deployments and system reliability.</p>
//       <ul>
//         <li>Manage CI/CD pipelines and cloud infrastructure.</li>
//         <li>Automate processes and monitor system health.</li>
//       </ul>
//     `
//   }
// ];



export const jobsData = [
  {
    _id: '1',
    title: "Full Stack Developer",
    location: "Dubai",
    level: "Senior Level",
    salary: 130000,
    date: "2025-06-01",
    category: "Software Development",
    companyId: {
      _id: "c1",
      name: "Slack",
      email: "slack@demo.com",
    },
    description: `
      <p>Join our team as a Full Stack Developer to build modern web applications.</p>
      <ul>
        <li>Work with React, Node.js, and MongoDB.</li>
        <li>Design scalable architecture.</li>
      </ul>
    `,
    applicants: [
      {
        name: "Rohan Mehta",
        resumeUrl: "#"
      },
      {
        name: "Sana Ali",
        resumeUrl: "#"
      }
    ]
  },
  {
    _id: '2',
    title: "Frontend Engineer",
    location: "New York",
    level: "Mid Level",
    salary: 100000,
    date: "2025-06-10",
    category: "Design",
    companyId: {
      _id: "c2",
      name: "Amazon",
      email: "amazon@demo.com",
    },
    description: `
      <p>We are looking for a skilled Frontend Engineer.</p>
      <ul>
        <li>Build responsive UIs with React and Tailwind CSS.</li>
        <li>Work closely with backend teams.</li>
      </ul>
    `,
    applicants: [
      {
        name: "Alex Johnson",
        resumeUrl: "#"
      }
    ]
  },
  {
    _id: '3',
    title: "Backend Developer",
    location: "Remote",
    level: "Junior Level",
    salary: 90000,
    date: "2025-05-15",
    category: "Software Development",
    companyId: {
      _id: "c3",
      name: "Google",
      email: "google@demo.com",
    },
    description: `
      <p>Help us improve our backend systems.</p>
      <ul>
        <li>Write scalable APIs with Node.js.</li>
        <li>Maintain cloud infrastructure.</li>
      </ul>
    `,
    applicants: [
      {
        name: "Divya Kapoor",
        resumeUrl: "#"
      }
    ]
  },
  {
    _id: '4',
    title: "UI/UX Designer",
    location: "Seattle",
    level: "Mid Level",
    salary: 85000,
    date: "2025-06-20",
    category: "Design",
    companyId: {
      _id: "c4",
      name: "Microsoft",
      email: "microsoft@demo.com",
    },
    description: `
      <p>Join our creative team as a UI/UX Designer.</p>
      <ul>
        <li>Design wireframes and user flows.</li>
        <li>Conduct user testing and improve UX.</li>
      </ul>
    `,
    applicants: []
  },
  {
    _id: '5',
    title: "DevOps Engineer",
    location: "San Francisco",
    level: "Senior Level",
    salary: 120000,
    date: "2025-06-05",
    category: "Software Development",
    companyId: {
      _id: "c5",
      name: "Adobe",
      email: "adobe@demo.com",
    },
    description: `
      <p>Ensure seamless deployments and system reliability.</p>
      <ul>
        <li>Manage CI/CD pipelines and cloud infrastructure.</li>
        <li>Automate processes and monitor system health.</li>
      </ul>
    `,
    applicants: [
      {
        name: "Mohit Singh",
        resumeUrl: "#"
      }
    ]
  }
];



export const jobsApplied = [
  {

    id:'1',
    company: 'Facebook',
    title: 'Frontend Developer',
    location: 'Hyderabad',
    date: '15 Jul, 2024',
    status: 'Pending',
    logo: company_icon,
  },
  {

     id:'2',
    company: 'Amazon',
    title: 'Full Stack Developer',
    location: 'Bangalore',
    date: '22 Aug, 2024',
    status: 'Pending',
    logo: company_icon,
  },
  {

     id:'3',
    company: 'Adobe',
    title: 'UI/UX Designer',
    location: 'Noida',
    date: '30 Jun, 2024',
    status: 'Interview Scheduled',
    logo: company_icon,
  },
  {
     id:'4',
    company: 'Google',
    title: 'Software Engineer',
    location: 'Pune',
    date: '10 Jul, 2024',
    status: 'Shortlisted',
    logo: company_icon,
  },
  {
     id:'5',
    company: 'Microsoft',
    title: 'Backend Developer',
    location: 'Hyderabad',
    date: '05 Jul, 2024',
    status: 'Pending',
    logo: company_icon,
  },
  {
    id:'6',
    company: 'Meta',
    title: 'React Developer',
    location: 'Gurgaon',
    date: '25 Jun, 2024',
    status: 'Rejected',
    logo: company_icon,
  },
];