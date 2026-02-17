
export type NetworkingIntent = 'Hiring' | 'Learning' | 'Partnerships' | 'Exploring';

export interface UserProfile {
  id: string;
  displayName: string;
  role: string;
  company: string;
  interests: string[];
  intent: NetworkingIntent;
  email: string;
}

export interface PreRegisteredAttendee {
  email: string;
  fullName: string;
  role: string;
  organization: string;
  interests: string; // Raw string from CSV
  intent?: string;
  claimCode: string;
  isClaimed: boolean;
}

export interface EventTag {
  id: string;
  name: string;
  category?: string;
}

export interface VisibilityState {
  isVisible: boolean;
  expiresAt: string | null;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface Recommendation {
  attendeeId: string;
  profile: UserProfile;
  matchScore: number;
  aboutMeSummary: string;
  matchJustification: string;
  hasWaved: boolean;
}

export interface Wave {
  id: string;
  senderId: string;
  recipientId: string;
  eventId: string;
  sentAt: string;
  isAcknowledged: boolean;
  senderProfile?: UserProfile;
}

export interface EventConfig {
  id: string;
  name: string;
  accessCode: string; // Organizer access code
  venueName: string;
  venueCoords: {
    lat: number;
    lng: number;
  };
  startDate: string;
  endDate: string;
  matchingGoals: NetworkingIntent[];
  attendees: PreRegisteredAttendee[];
  tags: string[];
}

export interface AppState {
  currentUser: UserProfile | null;
  currentEvent: EventConfig | null;
  visibility: VisibilityState;
  waves: Wave[];
  recommendations: Recommendation[];
}

export type AppContextView = 'attendee' | 'organizer' | 'login' | 'signup';
