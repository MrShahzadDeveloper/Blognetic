import { post1, post2, post3, post4, post5, post6, post7, post8, post9 } from './postImages'
import { Building } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

// First, let's create a slug generator function
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')  // Remove special chars
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with one
    .substring(0, 60);        // Limit length
};

export const RepostCardList = [
  {
    id: 1,
    slug: 'rules-of-travelling-in-sea',
    heading: '8 Rules of Travelling In Sea You Need To Know',
    paragh: 'Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ',
    type: 'Travel',
    date: '13 March 2023',
    cardImg: post1
  },
  {
    id: 2,
    slug: 'build-strong-ui-ux-portfolio',
    heading: 'How to build strong portfolio and get a Job in UI/UX',
    paragh: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from  ',
    type: 'Development',
    date: '11 March 2023',  // Fixed space
    cardImg: post2
  },
  {
    id: 3,
    slug: 'professional-footballer-2023',
    heading: 'How to Be a Professional Footballer in 2023',
    paragh: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ',
    type: 'Sports',
    date: '10 March 2023',
    cardImg: post3
  },
  {
    id: 4,  // Changed from duplicate id:3
    slug: 'football-training-tips',
    heading: 'Advanced Football Training Techniques',
    paragh: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ',
    type: 'Sports',
    date: '10 March 2023',
    cardImg: post3
  },
  {
    id: 5,  // Changed from duplicate id:3
    slug: 'football-career-guide',
    heading: 'Complete Guide to Football Careers',
    paragh: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ',
    type: 'Sports',
    date: '10 March 2023',
    cardImg: post3
  },
  // ... other posts with unique IDs
];

export const PopularList = [
  {
    id: 6,  // Changed from id:4 to avoid conflicts
    slug: 'train-or-bus-journey',
    heading: 'Train Or Bus Journey? Which one suits?',
    paragh: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ',
    type: 'Travel',
    date: '13 March 2023',
    cardImg: post4,
  },
  {
    id: 7,  // Changed from id:5
    slug: 'best-research-websites',
    heading: 'Best Website to research for your next project',
    paragh: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ',
    type: 'Development',
    date: '11 March 2023',  // Fixed space
    cardImg: post5,
  },
  {
    id: 698,
    slug: 'become-dancer-2023',
    heading: 'How to Be a Dancer in 2023 with proper skills?',
    paragh: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ',
    type: 'Sports',
    date: '10 March 2023',
    cardImg: post6,
  },
  // ... other posts with slugs
  {
    id: 9,  // Changed from id:7
    slug: 'best-singer-charts',
    heading: 'Who is the best singer on chart? Know him?',
    paragh: 'chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  ',
    type: 'Music',  // Changed from Travel
    date: '13 March 2023',
    cardImg: post7,
  },
  {
    id: 10,  // Changed from id:8
    slug: 'export-import-business-from-home',
    heading: 'How to start export import business from home?',
    paragh: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs ',
    type: 'Business',  // Changed from Development
    date: '11 March 2023',  // Fixed space
    cardImg: post8,
  },
  {
    id: 11,  // Changed from id:9
    slug: 'chocolate-milk-drinks',
    heading: 'Make some drinks with chocolates and milk',
    paragh: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive',
    type: 'Food',  // Changed from Sports
    date: '10 March 2023',
    cardImg: post9,
  }
];

export const AboutList = [
  {
    num: '01',
    heading: 'Brainstorming',
    para: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated',
  },
  {
    num: '02',
    heading: 'Analysing',
    para: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.',
  },
  {
    num: '03',
    heading: 'News Publishing',
    para: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
]


export const contactList = [
  {
    icon: <Building color='white' strokeWidth={1.5} />,
    heading: 'Office',
    para: "Victoria Street, London, UK",
  },
  {
    icon: <Mail color='white' strokeWidth={1.5} />,
    heading: 'Email',
    para: "hello@zarrin.com",
  },
  {
    icon: <Phone color='white' strokeWidth={1.5} />,
    heading: 'Phone',
    para: "(001) 2342 3451",
  },
] 