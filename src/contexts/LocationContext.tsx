// src/contexts/LocationContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (loc: string) => void;
}
export const LocationContext = createContext<LocationContextType>({ location: '', setLocation: () => {} });

export function LocationProvider({ children }) {
  const [location, setLocationState] = useState(localStorage.getItem('clinicLocation') || '');

  const setLocation = (loc: string) => {
    setLocationState(loc);
    localStorage.setItem('clinicLocation', loc);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);

// Helper for reading location outside React (services/api)
export function getLocation() {
  return typeof window === "undefined" ? "" : localStorage.getItem('clinicLocation') || "";
}
