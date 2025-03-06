import './App.css';
import { useState } from 'react';
import ReservationCard from './components/ReservationCard';
import AuthModal from './components/AuthModal';
import AuthHeader from './components/AuthHeader';

function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: null });
  
  const handleOpenAuth = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };
  
  const handleCloseAuth = (switchToMode) => {
    if (switchToMode) {
      setAuthModal({ isOpen: true, mode: switchToMode });
    } else {
      setAuthModal({ isOpen: false, mode: null });
    }
  };

  // Sample reservation data
  const reservations = [
    { date: 'March 6, 2025', time: '7:00 PM', partySize: 2 },
    { date: 'March 6, 2025', time: '8:30 PM', partySize: 4 },
    { date: 'March 7, 2025', time: '6:30 PM', partySize: 2 },
    { date: 'March 7, 2025', time: '7:30 PM', partySize: 6 },
    { date: 'March 8, 2025', time: '6:00 PM', partySize: 2 },
    { date: 'March 8, 2025', time: '8:00 PM', partySize: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader onOpenAuth={handleOpenAuth} />
      <AuthModal 
        isOpen={authModal.isOpen} 
        mode={authModal.mode} 
        onClose={handleCloseAuth} 
      />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Reservations</h1>
            <p className="text-lg text-gray-600">Find and book your next fine dining experience at The French Laundry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((reservation, index) => (
              <ReservationCard key={index} {...reservation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
