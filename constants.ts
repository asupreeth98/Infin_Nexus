
import { EventConfig, UserProfile, NetworkingIntent } from './types';

export const INTENT_OPTIONS: NetworkingIntent[] = ['Learning', 'Hiring', 'Partnerships', 'Exploring'];

export const INTEREST_TAGS = [
  'AI/ML', 'SaaS', 'Fintech', 'Product Mgmt', 'Venture Capital', 
  'Frontend', 'Backend', 'DevOps', 'UX Design', 'Growth Hacking',
  'Blockchain', 'Sustainability', 'Robotics', 'Web3', 'Cybersecurity'
];

// Updated accessCode to ADMIN26 to match the UI placeholder for the organizer login
export const MOCK_EVENT: EventConfig = {
  id: 'event_123',
  name: 'TechVision Global Summit 2026',
  accessCode: 'ADMIN26',
  venueName: 'Innovation Hub Convention Center',
  venueCoords: {
    lat: 37.7749, // SF coordinates for demo
    lng: -122.4194
  },
  startDate: '2026-03-15',
  endDate: '2026-03-17',
  matchingGoals: ['Learning', 'Partnerships'],
  attendees: [],
  tags: INTEREST_TAGS
};

export const MOCK_USERS: UserProfile[] = [
  {
    id: 'user_2',
    displayName: 'Sarah Chen',
    role: 'Product Lead',
    company: 'NextGen AI',
    interests: ['AI/ML', 'SaaS', 'Product Mgmt'],
    intent: 'Partnerships',
    email: 'sarah@nextgen.ai'
  },
  {
    id: 'user_3',
    displayName: 'David Miller',
    role: 'Founder',
    company: 'CloudScale',
    interests: ['Venture Capital', 'SaaS', 'Growth Hacking'],
    intent: 'Hiring',
    email: 'david@cloudscale.io'
  },
  {
    id: 'user_4',
    displayName: 'Elena Rodriguez',
    role: 'Senior Engineer',
    company: 'WebFlow',
    interests: ['UX Design', 'Frontend', 'Web3'],
    intent: 'Learning',
    email: 'elena@webflow.com'
  },
  {
    id: 'user_5',
    displayName: 'Marcus Thorne',
    role: 'Investor',
    company: 'Blue Chip Ventures',
    interests: ['Fintech', 'Venture Capital', 'Blockchain'],
    intent: 'Exploring',
    email: 'marcus@bluechip.vc'
  }
];
