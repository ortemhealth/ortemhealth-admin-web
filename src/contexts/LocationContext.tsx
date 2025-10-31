import React, { createContext, useContext, useState } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (loc: string) => void;
}
export const LocationContext = createContext<LocationContextType>({ location: '', setLocation: () => {} });

export function LocationProvider({ children }) {
  const [location, setLocation] = useState('');
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);
