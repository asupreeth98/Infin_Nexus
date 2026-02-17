
import React, { useState } from 'react';
import { NexusProvider, useNexus } from './store/NexusContext';
import Layout from './components/Layout';
import Landing from './views/Landing';
import Onboarding from './views/Onboarding';
import Home from './views/Home';
import Discovery from './views/Discovery';
import Waves from './views/Waves';
import Profile from './views/Profile';
import OrganizerDashboard from './views/OrganizerDashboard';
import Login from './views/Login';
import Signup from './views/Signup';

const AppContent: React.FC = () => {
  const { currentUser, currentEvent, view } = useNexus();
  const [activeTab, setActiveTab] = useState('home');

  // Handle Organizer View
  if (view === 'organizer') {
    return <OrganizerDashboard />;
  }

  // Handle Authentication Views
  if (view === 'login') {
    return <Login />;
  }

  if (view === 'signup') {
    return <Signup />;
  }

  // Handle Attendee Flow
  if (!currentUser) {
    return <Landing />;
  }

  // Attendee view with sidebar layout
  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && <Home />}
      {activeTab === 'discover' && <Discovery />}
      {activeTab === 'waves' && <Waves />}
      {activeTab === 'profile' && <Profile />}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <NexusProvider>
      <AppContent />
    </NexusProvider>
  );
};

export default App;
