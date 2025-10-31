import React, { createContext, useContext, useState } from 'react';
export const LocationContext = createContext({ location: '', setLocation: () => {} });
export const useLocation = () => useContext(LocationContext);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState('');
  return (<LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>);
}
